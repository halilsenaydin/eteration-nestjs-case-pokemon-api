import { Inject, Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, QueryRunner, Repository, UpdateResult } from 'typeorm';
import { TypeOfChar } from './entities/type-of-char.entity';
import { CreateTypeOfCharDto } from './dto/create-type-of-char.dto';
import { UpdateTypeOfCharDto } from './dto/update-type-of-char.dto';
import { FilterTypeOfCharDto } from './dto/filter-type-of-char.dto';

@Injectable()
export class TypeOfCharRepository {
  _repository: Repository<TypeOfChar>;
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource
  ) { 
    this._repository = this.dataSource.getRepository(TypeOfChar)
  }

  save(char: CreateTypeOfCharDto): Promise<TypeOfChar> {
    let newChar = this._repository.create(char);
    let result = this._repository.save(newChar);
    return result;
  }

  saveMany(char: CreateTypeOfCharDto[]): Promise<TypeOfChar[]> {
    let result = this._repository.save(char);
    return result;
  }

  saveManyQueryRunner(char: CreateTypeOfCharDto[], queryRunner: QueryRunner): Promise<TypeOfChar[]> {
    let result = queryRunner.manager.save(this._repository.create(char));
    return result;
  }

  findAll(): Promise<TypeOfChar[]> {
    let result = this._repository.find();
    return result;
  }

  findAllDto(): Promise<TypeOfChar[]> {
    let result = this._repository
      .createQueryBuilder('typeOfChar')
      .innerJoinAndSelect('typeOfChar.char', 'char')
      .innerJoinAndSelect('typeOfChar.type', 'charType')
      .getMany();

    return result;
  }

  findAllBy(condition: FilterTypeOfCharDto): Promise<TypeOfChar[]> {
    let result = this._repository.findBy(condition);
    return result;
  }

  findAllByDto(condition: FilterTypeOfCharDto): Promise<TypeOfChar[]> {
    const queryBuilder = this._repository.createQueryBuilder('typeOfChar');

    Object.keys(condition).forEach((key) => {
      if (condition[key] !== undefined) {
        queryBuilder.andWhere(`typeOfChar.${key} = :${key}`, { [key]: condition[key] });
      }
    });

    queryBuilder
      .innerJoinAndSelect('typeOfChar.char', 'char')
      .innerJoinAndSelect('typeOfChar.type', 'charType');

    return queryBuilder.getMany();
  }

  findOne(condition: FilterTypeOfCharDto): Promise<TypeOfChar> {
    return this._repository.findOneBy(condition);
  }

  update(id: string, char: UpdateTypeOfCharDto): Promise<UpdateResult> {
    return this._repository.update(id, char);
  }

  remove(id: string): Promise<DeleteResult> {
    return this._repository.delete(id);
  }
  
  removeMany(ids: string[]): Promise<DeleteResult> {
    return this._repository.delete(ids);
  }

  removeManyQueryRunner(ids: string[], queryRunner:QueryRunner): Promise<DeleteResult> {
    return queryRunner.manager.delete(TypeOfChar, ids);
  }
}