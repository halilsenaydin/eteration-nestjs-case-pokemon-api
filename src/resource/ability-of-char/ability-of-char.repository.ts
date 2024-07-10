import { Inject, Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, QueryRunner, Repository, UpdateResult } from 'typeorm';
import { AbilityOfChar } from './entities/ability-of-char.entity';
import { UpdateAbilityOfCharDto } from './dto/update-ability-of-char.dto';
import { CreateAbilityOfCharDto } from './dto/create-ability-of-char.dto';
import { FilterAbilityOfCharDto } from './dto/filter-ability-of-char.dto';

@Injectable()
export class AbilityOfCharRepository {
  _repository: Repository<AbilityOfChar>;
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource
  ) { 
    this._repository = this.dataSource.getRepository(AbilityOfChar)
  }

  save(char: CreateAbilityOfCharDto): Promise<AbilityOfChar> {
    let newChar = this._repository.create(char);
    let result = this._repository.save(newChar);
    return result;
  }

  saveMany(char: CreateAbilityOfCharDto[]): Promise<AbilityOfChar[]> {
    let result = this._repository.save(char);
    return result;
  }

  saveManyQueryRunner(char: CreateAbilityOfCharDto[], queryRunner:QueryRunner): Promise<AbilityOfChar[]> {
    let result = queryRunner.manager.save(this._repository.create(char));
    return result;
  }

  findAll(): Promise<AbilityOfChar[]> {
    let result = this._repository.find();
    return result;
  }

  findAllDto(): Promise<AbilityOfChar[]> {
    let result = this._repository
      .createQueryBuilder('abilityOfChar')
      .innerJoinAndSelect('abilityOfChar.char', 'char')
      .innerJoinAndSelect('abilityOfChar.ability', 'charAbility')
      .getMany();

    return result;
  }

  findAllBy(condition: FilterAbilityOfCharDto): Promise<AbilityOfChar[]> {
    let result = this._repository.findBy(condition);
    return result;
  }

  findAllByDto(condition: FilterAbilityOfCharDto): Promise<AbilityOfChar[]> {
    const queryBuilder = this._repository.createQueryBuilder('abilityOfChar');

    Object.keys(condition).forEach((key) => {
      if (condition[key] !== undefined) {
        queryBuilder.andWhere(`abilityOfChar.${key} = :${key}`, { [key]: condition[key] });
      }
    });

    queryBuilder
      .innerJoinAndSelect('abilityOfChar.char', 'char')
      .innerJoinAndSelect('abilityOfChar.ability', 'charAbility');

    return queryBuilder.getMany();
  }

  findOne(condition: FilterAbilityOfCharDto): Promise<AbilityOfChar> {
    return this._repository.findOneBy(condition);
  }

  update(id: string, char: UpdateAbilityOfCharDto): Promise<UpdateResult> {
    return this._repository.update(id, char);
  }

  remove(id: string): Promise<DeleteResult> {
    return this._repository.delete(id);
  }

  removeMany(ids: string[]): Promise<DeleteResult> {
    return this._repository.delete(ids);
  }

  removeManyQueryRunner(ids: string[], queryRunner:QueryRunner): Promise<DeleteResult> {
    return queryRunner.manager.delete(AbilityOfChar, ids);
  }
}