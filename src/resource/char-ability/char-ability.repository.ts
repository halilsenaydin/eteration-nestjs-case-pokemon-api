import { Inject, Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CharAbility } from './entities/char-ability.entity';
import { CreateCharAbilityDto } from './dto/create-char-ability.dto';
import { UpdateCharAbilityDto } from './dto/update-char-ability.dto';
import { FilterCharAbilityDto } from './dto/filter-char-ability.dto';

@Injectable()
export class CharAbilityRepository {
  _repository: Repository<CharAbility>;
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource
  ) { 
    this._repository = this.dataSource.getRepository(CharAbility)
  }

  save(char: CreateCharAbilityDto): Promise<CharAbility> {
    let newChar = this._repository.create(char);
    let result = this._repository.save(newChar);
    return result;
  }

  saveMany(char: CreateCharAbilityDto[]): Promise<CharAbility[]> {
    let result = this._repository.save(char);
    return result;
  }

  findAll(): Promise<CharAbility[]> {
    let result = this._repository.find();
    return result;
  }

  findOne(id: string): Promise<CharAbility> {
    return this._repository.findOneBy({ id });
  }

  findOneByCondition(condition: FilterCharAbilityDto): Promise<CharAbility> {
    return this._repository.findOneBy(condition);
  }

  update(id: string, char: UpdateCharAbilityDto): Promise<UpdateResult> {
    return this._repository.update(id, char);
  }

  remove(id: string): Promise<DeleteResult> {
    return this._repository.delete(id);
  }
}