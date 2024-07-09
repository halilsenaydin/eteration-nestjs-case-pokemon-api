import { Inject, Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
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

  findAll(): Promise<AbilityOfChar[]> {
    let result = this._repository.find();
    return result;
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
}