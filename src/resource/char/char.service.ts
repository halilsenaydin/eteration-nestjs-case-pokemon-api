import { Injectable } from '@nestjs/common';
import { CreateCharDto } from './dto/create-char.dto';
import { UpdateCharDto } from './dto/update-char.dto';
import { CharRepository } from './char.repository';
import ErrorDataResult from 'src/model/errorDataResult';
import SuccessDataResult from 'src/model/successDataResult';
import { FilterCharDto } from './dto/filter-char.dto';

@Injectable()
export class CharService {
  constructor(
    private readonly repository: CharRepository
  ) { }

  async save(createCharDto: CreateCharDto) {
    try {
      let result = await this.repository.save(createCharDto);
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

  async saveMany(createCharDto: CreateCharDto[]) {
    try {
      let result = await this.repository.saveMany(createCharDto);
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

  async saveOrUpdate(createCharDto: CreateCharDto) {
    try {
      let result = await this.repository.saveOrUpdate(createCharDto);
      return new SuccessDataResult('', result);
    } catch {
      return new ErrorDataResult('', null);
    }
  }

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

  async findOne(condition: FilterCharDto) {
    try {
      const result = await this.repository.findOne(condition);
      return new SuccessDataResult('', result);
    } catch (error) {
      return new ErrorDataResult('', null);
    }
  }

  async findOneDto(condition: FilterCharDto) {
    try {
      const result = await this.repository.findOneDto(condition);
      return new SuccessDataResult('', result);
    } catch (error) {
      return new ErrorDataResult('', null);
    }
  }


  async update(id: string, updateCharDto: UpdateCharDto) {
    try {
      let result = await this.repository.update(id, updateCharDto);
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
}
