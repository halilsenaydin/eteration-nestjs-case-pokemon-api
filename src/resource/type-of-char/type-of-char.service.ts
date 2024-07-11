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
    private readonly repository: TypeOfCharRepository
  ) { }

  async findAll() {
    try {
      let result = await this.repository.findAll();
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

  async findAllDto() {
    try {
      let result = await this.repository.findAllDto();
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

  async findAllBy(condition: FilterTypeOfCharDto) {
    try {
      let result = await this.repository.findAllBy(condition);
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

  async findAllByDto(condition: FilterTypeOfCharDto) {
    try {
      let result = await this.repository.findAllByDto(condition);
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

  async findOne(condition: FilterTypeOfCharDto) {
    try {
      let result = await this.repository.findOne(condition);
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

  async update(id: string, updateDto: UpdateTypeOfCharDto) {
    try {
      let result = await this.repository.update(id, updateDto);
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

  async remove(id: string) {
    try {
      let result = await this.repository.remove(id);
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

  async removeMany(ids: string[]) {
    try {
      let result = await this.repository.removeMany(ids);
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }
}
