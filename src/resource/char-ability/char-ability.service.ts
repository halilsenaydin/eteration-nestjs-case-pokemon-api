import { Injectable } from '@nestjs/common';
import { CreateCharAbilityDto } from './dto/create-char-ability.dto';
import { UpdateCharAbilityDto } from './dto/update-char-ability.dto';
import SuccessDataResult from 'src/model/successDataResult';
import ErrorDataResult from 'src/model/errorDataResult';
import { CharAbilityRepository } from './char-ability.repository';
import { FilterCharAbilityDto } from './dto/filter-char-ability.dto';

@Injectable()
export class CharAbilityService {
  constructor(
    private readonly repository:CharAbilityRepository
  ) {}

  async save(createDto: CreateCharAbilityDto) {
    try{
      console.log("d")
      let charAbility = await this.findOneByCondition({abilityName: createDto.abilityName});
      console.log(charAbility)
      if(!charAbility.status){
        return charAbility;
      } else if(charAbility.data){
        return new SuccessDataResult('CharAbility is exist!', charAbility.data);
      }

      let result = await this.repository.save(createDto);
      return new SuccessDataResult('', result);
    }catch{
      return new ErrorDataResult('', null);
    }
  }

  async saveMany(createDto: CreateCharAbilityDto[]) {
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

  async findOneByCondition(condition: FilterCharAbilityDto) {
    try {
      const result = await this.repository.findOneByCondition(condition);
      return new SuccessDataResult('', result);
    } catch (error) {
      return new ErrorDataResult('', null);
    }
  }

  async update(id: string, updateDto: UpdateCharAbilityDto) {
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
