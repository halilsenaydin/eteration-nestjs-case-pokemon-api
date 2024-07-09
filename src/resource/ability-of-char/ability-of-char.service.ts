import { Injectable } from '@nestjs/common';
import { CreateAbilityOfCharDto } from './dto/create-ability-of-char.dto';
import { UpdateAbilityOfCharDto } from './dto/update-ability-of-char.dto';
import SuccessDataResult from 'src/model/successDataResult';
import ErrorDataResult from 'src/model/errorDataResult';
import { AbilityOfCharRepository } from './ability-of-char.repository';

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

  async findOne(id: string) {
    try{
      let result = await this.repository.findOne(id);
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
}
