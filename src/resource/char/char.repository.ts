import { Inject, Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Char } from './entities/char.entity';
import { CreateCharDto } from './dto/create-char.dto';
import { UpdateCharDto } from './dto/update-char.dto';
import { FilterCharDto } from './dto/filter-char.dto';

@Injectable()
export class CharRepository {
  _repository: Repository<Char>;
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource
  ) { 
    this._repository = this.dataSource.getRepository(Char)
  }

  save(char: CreateCharDto): Promise<Char> {
    let newChar = this._repository.create(char);
    let result = this._repository.save(newChar);
    return result;
  }

  saveMany(char: CreateCharDto[]): Promise<Char[]> {
    let result = this._repository.save(char);
    return result;
  }

  findAll(): Promise<Char[]> {
    let result = this._repository.find();
    return result;
  }

  findAllDto(): Promise<Char[]> {
    let result = this._repository
      .createQueryBuilder('char')
      .innerJoinAndSelect('char.abilitiesOfChar', 'abilityOfChar')
      .innerJoinAndSelect('abilityOfChar.ability', 'charAbility')
      .innerJoinAndSelect('char.typesOfChar', 'typeOfChar')
      .innerJoinAndSelect('typeOfChar.type', 'charType')
      .getMany();
    
    return result;
  }

  findOne(condition: FilterCharDto): Promise<Char> {
    return this._repository.findOneBy(condition);
  }

  findOneDto(condition: FilterCharDto): Promise<Char> {
    const queryBuilder = this._repository.createQueryBuilder('char');

    Object.keys(condition).forEach((key) => {
      if (condition[key] !== undefined) {
        queryBuilder.andWhere(`char.${key} = :${key}`, { [key]: condition[key] });
      }
    });

    queryBuilder
      .innerJoinAndSelect('char.abilitiesOfChar', 'abilityOfChar')
      .innerJoinAndSelect('abilityOfChar.ability', 'charAbility')
      .innerJoinAndSelect('char.typesOfChar', 'typeOfChar')
      .innerJoinAndSelect('typeOfChar.type', 'charType');

    return queryBuilder.getOne();
  }

  update(id: string, char: UpdateCharDto): Promise<UpdateResult> {
    return this._repository.update(id, char);
  }

  remove(id: string): Promise<DeleteResult> {
    return this._repository.delete(id);
  }
}