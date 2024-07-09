import { Inject, Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TypeOfChar } from './entities/type-of-char.entity';
import { CreateTypeOfCharDto } from './dto/create-type-of-char.dto';
import { UpdateTypeOfCharDto } from './dto/update-type-of-char.dto';

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

  findAll(): Promise<TypeOfChar[]> {
    let result = this._repository.find();
    return result;
  }

  findOne(id: string): Promise<TypeOfChar> {
    return this._repository.findOneBy({ id });
  }

  update(id: string, char: UpdateTypeOfCharDto): Promise<UpdateResult> {
    return this._repository.update(id, char);
  }

  remove(id: string): Promise<DeleteResult> {
    return this._repository.delete(id);
  }
}