import { Injectable } from '@nestjs/common';
import { CreateAbilityOfCharDto } from './dto/create-ability-of-char.dto';
import { UpdateAbilityOfCharDto } from './dto/update-ability-of-char.dto';
import SuccessDataResult from 'src/model/successDataResult';
import ErrorDataResult from 'src/model/errorDataResult';
import { AbilityOfCharRepository } from './ability-of-char.repository';
import { FilterAbilityOfCharDto } from './dto/filter-ability-of-char.dto';

@Injectable()
export class AbilityOfCharService {
  constructor(
    private readonly repository:AbilityOfCharRepository
  ) {}

  async save(createDto: CreateAbilityOfCharDto) {
    try{
      let result = await this.repository.save(createDto);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async saveMany(createDto: CreateAbilityOfCharDto[]) {
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

  async findAllDto() {
    try{
      let result = await this.repository.findAllDto();
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }


  async findAllBy(condition: FilterAbilityOfCharDto) {
    try{
      let result = await this.repository.findAllBy(condition);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async findAllByDto(condition: FilterAbilityOfCharDto) {
    try{
      let result = await this.repository.findAllByDto(condition);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async findOne(condition: FilterAbilityOfCharDto) {
    try{
      let result = await this.repository.findOne(condition);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async update(id: string, updateDto: UpdateAbilityOfCharDto) {
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

  async removeMany(ids: string[]) {
    try{
      let result = await this.repository.removeMany(ids);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }
}
