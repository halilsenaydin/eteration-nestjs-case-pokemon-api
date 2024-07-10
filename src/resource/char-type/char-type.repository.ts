import { Inject, Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, QueryRunner, Repository, UpdateResult } from 'typeorm';
import { CharType } from './entities/char-type.entity';
import { UpdateCharTypeDto } from './dto/update-char-type.dto';
import { CreateCharTypeDto } from './dto/create-char-type.dto';
import { FilterCharTypeDto } from './dto/filter-char-type.dto';

@Injectable()
export class CharTypeRepository {
  _repository: Repository<CharType>;
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource
  ) { 
    this._repository = this.dataSource.getRepository(CharType)
  }

  save(char: CreateCharTypeDto): Promise<CharType> {
    let newChar = this._repository.create(char);
    let result = this._repository.save(newChar);
    return result;
  }

  saveQueryRunner(char: CreateCharTypeDto, queryRunner:QueryRunner): Promise<CharType> {
    return queryRunner.manager.save(this._repository.create(char));
  }

  saveMany(char: CreateCharTypeDto[]): Promise<CharType[]> {
    let result = this._repository.save(char);
    return result;
  }

  findAll(): Promise<CharType[]> {
    let result = this._repository.find();
    return result;
  }

  findOne(condition: FilterCharTypeDto): Promise<CharType> {
    return this._repository.findOneBy(condition);
  }

  update(id: string, char: UpdateCharTypeDto): Promise<UpdateResult> {
    return this._repository.update(id, char);
  }

  remove(id: string): Promise<DeleteResult> {
    return this._repository.delete(id);
  }
}