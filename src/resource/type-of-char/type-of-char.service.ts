import { Injectable } from '@nestjs/common';
import { CreateTypeOfCharDto } from './dto/create-type-of-char.dto';
import { UpdateTypeOfCharDto } from './dto/update-type-of-char.dto';
import SuccessDataResult from 'src/model/successDataResult';
import ErrorDataResult from 'src/model/errorDataResult';
import { TypeOfCharRepository } from './type-of-char.repository';
import { FilterTypeOfCharDto } from './dto/filter-type-of-char.dto';

@Injectable()
export class TypeOfCharService {
  constructor(
    private readonly repository:TypeOfCharRepository
  ) {}

  async save(createDto: CreateTypeOfCharDto) {
    try{
      let result = await this.repository.save(createDto);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async saveMany(createDto: CreateTypeOfCharDto[]) {
    try{
      let result = await this.repository.saveMany(createDto);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async findAll() {
    try{
      let result = await this.repository.findAll();
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async findOne(condition: FilterTypeOfCharDto) {
    try{
      let result = await this.repository.findOne(condition);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async update(id: string, updateDto: UpdateTypeOfCharDto) {
    try{
      let result = await this.repository.update(id, updateDto);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async remove(id: string) {
    try{
      let result = await this.repository.remove(id);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }
}
