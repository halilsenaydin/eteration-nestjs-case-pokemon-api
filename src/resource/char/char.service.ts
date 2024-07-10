import { Injectable } from '@nestjs/common';
import { CreateCharDto } from './dto/create-char.dto';
import { UpdateCharDto } from './dto/update-char.dto';
import { CharRepository } from './char.repository';
import ErrorDataResult from 'src/model/errorDataResult';
import SuccessDataResult from 'src/model/successDataResult';
import { FilterCharDto } from './dto/filter-char.dto';
import { CharTypeService } from '../char-type/char-type.service';
import { CharAbilityService } from '../char-ability/char-ability.service';
import { CreateTypeOfCharDto } from '../type-of-char/dto/create-type-of-char.dto';
import { CreateAbilityOfCharDto } from '../ability-of-char/dto/create-ability-of-char.dto';
import { TypeOfCharService } from '../type-of-char/type-of-char.service';
import { AbilityOfCharService } from '../ability-of-char/ability-of-char.service';
import { AbilityOfChar } from '../ability-of-char/entities/ability-of-char.entity';
import { TypeOfChar } from '../type-of-char/entities/type-of-char.entity';
import { QueryRunner } from 'typeorm';
import { Char } from './entities/char.entity';

@Injectable()
export class CharService {
  constructor(
    private readonly repository: CharRepository,
    private readonly charTypeService: CharTypeService,
    private readonly charAbilityService: CharAbilityService,
    private readonly abilityOfCharService: AbilityOfCharService,
    private readonly typeOfCharService: TypeOfCharService
  ) { }

  async save(createCharDto: CreateCharDto){
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

  async saveOrUpdate(createCharDto: CreateCharDto){
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
