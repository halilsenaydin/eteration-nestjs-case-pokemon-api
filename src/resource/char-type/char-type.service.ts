import { Injectable } from '@nestjs/common';
import { CreateCharTypeDto } from './dto/create-char-type.dto';
import { UpdateCharTypeDto } from './dto/update-char-type.dto';
import SuccessDataResult from 'src/model/successDataResult';
import ErrorDataResult from 'src/model/errorDataResult';
import { CharTypeRepository } from './char-type.repository';
import { FilterCharTypeDto } from './dto/filter-char-type.dto';

@Injectable()
export class CharTypeService {
  constructor(
    private readonly repository:CharTypeRepository
  ) {}

  async save(createDto: CreateCharTypeDto) {
    try{
      let charType = await this.findOne({typeName: createDto.typeName});
      if(!charType.status){
        return charType;
      } else if(charType.data){
        return new SuccessDataResult('CharType is exist!', charType.data);
      }

      let result = await this.repository.save(createDto);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async saveMany(createDto: CreateCharTypeDto[]) {
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

  async findOne(condition: FilterCharTypeDto) {
    try {
      const result = await this.repository.findOne(condition);
      return new SuccessDataResult('', result);
    } catch (error) {
      return new ErrorDataResult('', null);
    }
  }

  async update(id: string, updateDto: UpdateCharTypeDto) {
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
