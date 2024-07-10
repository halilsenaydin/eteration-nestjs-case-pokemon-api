import { Inject, Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, QueryRunner, Repository, UpdateResult } from 'typeorm';
import { Char } from './entities/char.entity';
import { CreateCharDto } from './dto/create-char.dto';
import { UpdateCharDto } from './dto/update-char.dto';
import { FilterCharDto } from './dto/filter-char.dto';
import { CreateTypeOfCharDto } from '../type-of-char/dto/create-type-of-char.dto';
import { CreateAbilityOfCharDto } from '../ability-of-char/dto/create-ability-of-char.dto';
import SuccessDataResult from 'src/model/successDataResult';
import ErrorDataResult from 'src/model/errorDataResult';
import { AbilityOfCharRepository } from '../ability-of-char/ability-of-char.repository';
import { TypeOfCharRepository } from '../type-of-char/type-of-char.repository';
import { CharTypeService } from '../char-type/char-type.service';
import { CharAbilityService } from '../char-ability/char-ability.service';

@Injectable()
export class CharRepository {
  _repository: Repository<Char>;
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    private readonly charTypeService: CharTypeService,
    private readonly charAbilityService: CharAbilityService,
    private readonly abilityOfCharRepository: AbilityOfCharRepository,
    private readonly typeOfCharRepository: TypeOfCharRepository
  ) {
    this._repository = this.dataSource.getRepository(Char)
  }

  save(char: CreateCharDto): Promise<Char> {
    let newChar = this._repository.create(char);
    let result = this._repository.save(newChar);
    return result;
  }

  saveMany(char: CreateCharDto[]): Promise<Char[]> {
    let result = this._repository.save(char);
    return result;
  }

  async saveExist(createCharDto: CreateCharDto, queryRunner: QueryRunner) {
    // Save new char
    let saveChar = await queryRunner.manager.save(this._repository.create(createCharDto));

    // Get types of char
    let typeOfChar: CreateTypeOfCharDto[] = [];
    for (let i = 0; i < createCharDto.charTypes.length; i++) {
      const charType = createCharDto.charTypes[i];
      let charTypeEntity = await this.charTypeService.save(charType);
      if (charTypeEntity) {
        typeOfChar.push({ charId: saveChar.id, typeId: charTypeEntity.data.id });
      }
    }

    // Get abilities of char
    let abilityOfChar: CreateAbilityOfCharDto[] = [];
    for (let i = 0; i < createCharDto.abilities.length; i++) {
      const charAbility = createCharDto.abilities[i];
      let charAbilityEntity = await this.charAbilityService.save(charAbility);
      if (charAbilityEntity) {
        abilityOfChar.push({ charId: saveChar.id, abilityId: charAbilityEntity.data.id });
      }
    }
    
    await this.abilityOfCharRepository.saveManyQueryRunner(abilityOfChar, queryRunner);
    await this.typeOfCharRepository.saveManyQueryRunner(typeOfChar, queryRunner);
    
    await queryRunner.commitTransaction();
    return new SuccessDataResult('', { char: saveChar, relations: { typeOfChar, abilityOfChar } });
  }

  async updateExist(char: Char, createCharDto: CreateCharDto, queryRunner: QueryRunner) {
    // Update char
    let updateCharDto: UpdateCharDto = {
      name: createCharDto.name,
      weight: createCharDto.weight,
      height: createCharDto.height,
      isDefault: createCharDto.isDefault
    };
    await queryRunner.manager.update(Char, char.id, updateCharDto);

    // Update types of char
    let typeOfChar: CreateTypeOfCharDto[] = [];
    for (let i = 0; i < createCharDto.charTypes.length; i++) {
      const charType = createCharDto.charTypes[i];
      let charTypeEntity = await this.charTypeService.save(charType);
      if (charTypeEntity) {
        typeOfChar.push({ charId: char.id, typeId: charTypeEntity.data.id });
      }
    }

    // Update abilities of char
    let abilityOfChar: CreateAbilityOfCharDto[] = [];
    for (let i = 0; i < createCharDto.abilities.length; i++) {
      const charAbility = createCharDto.abilities[i];
      let charAbilityEntity = await this.charAbilityService.save(charAbility);
      if (charAbilityEntity) {
        abilityOfChar.push({ charId: char.id, abilityId: charAbilityEntity.data.id });
      }
    }

    let currentAbilities = (await this.abilityOfCharRepository.findAllByDto({charId: char.id}));
    let abilitiesToRemove = currentAbilities.filter(
      ca => !createCharDto.abilities.some(a => a.abilityName === ca.ability.abilityName)
    );

    const abilityOfCharIds = abilitiesToRemove.map(char => char.id);
    abilityOfCharIds.length > 0 ? await this.abilityOfCharRepository.removeManyQueryRunner(abilityOfCharIds, queryRunner) : null;

    let abilitiesToAdd = abilityOfChar.filter(
      a => !currentAbilities.some(ca => ca.ability.id === a.abilityId)
    );

    let abilityOfCharToAdd: CreateAbilityOfCharDto[] = abilitiesToAdd.map(a => ({
      charId: char.id,
      abilityId: a.abilityId
    }));
    await this.abilityOfCharRepository.saveManyQueryRunner(abilityOfCharToAdd, queryRunner);

    let currentTypes = (await this.typeOfCharRepository.findAllByDto({charId: char.id}));
    let typesToRemove = currentTypes.filter(
      ca => !createCharDto.charTypes.some(a => a.typeName === ca.type.typeName)
    );

    const typeOfCharIds = typesToRemove.map(char => char.id);
    typeOfCharIds.length > 0 ? await this.typeOfCharRepository.removeManyQueryRunner(typeOfCharIds, queryRunner) : null;
    
    let typesToAdd = typeOfChar.filter(
      a => !currentTypes.some(ca => ca.type.id === a.typeId)
    );

    let typeOfCharToAdd: CreateTypeOfCharDto[] = typesToAdd.map(a => ({
      charId: char.id,
      typeId: a.typeId
    }));
    await this.typeOfCharRepository.saveManyQueryRunner(typeOfCharToAdd, queryRunner);

    await queryRunner.commitTransaction();
    return new SuccessDataResult('', { char: char, relations: { typesOfChar: typeOfChar, abilitiesOfChar: abilityOfChar } });
  }

  async saveOrUpdate(createCharDto: CreateCharDto) {
    const queryRunner = this._repository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      let char = await this.findOne({ name: createCharDto.name });
      if (char) {
        return await this.updateExist(char, createCharDto, queryRunner);
      } else {
        return await this.saveExist(createCharDto, queryRunner);
      }
    } catch (error) {
      console.log(error)
      await queryRunner.rollbackTransaction();
      return new ErrorDataResult('', null);
    } finally {
      await queryRunner.release();
    }
  }

  findAll(): Promise<Char[]> {
    let result = this._repository.find();
    return result;
  }

  findAllDto(): Promise<Char[]> {
    let result = this._repository
      .createQueryBuilder('char')
      .innerJoinAndSelect('char.abilitiesOfChar', 'abilityOfChar')
      .innerJoinAndSelect('abilityOfChar.ability', 'charAbility')
      .innerJoinAndSelect('char.typesOfChar', 'typeOfChar')
      .innerJoinAndSelect('typeOfChar.type', 'charType')
      .getMany();

    return result;
  }

  findOne(condition: FilterCharDto): Promise<Char> {
    return this._repository.findOneBy(condition);
  }

  findOneDto(condition: FilterCharDto): Promise<Char> {
    const queryBuilder = this._repository.createQueryBuilder('char');

    Object.keys(condition).forEach((key) => {
      if (condition[key] !== undefined) {
        queryBuilder.andWhere(`char.${key} = :${key}`, { [key]: condition[key] });
      }
    });

    queryBuilder
      .innerJoinAndSelect('char.abilitiesOfChar', 'abilityOfChar')
      .innerJoinAndSelect('abilityOfChar.ability', 'charAbility')
      .innerJoinAndSelect('char.typesOfChar', 'typeOfChar')
      .innerJoinAndSelect('typeOfChar.type', 'charType');

    return queryBuilder.getOne();
  }

  update(id: string, char: UpdateCharDto): Promise<UpdateResult> {
    return this._repository.update(id, char);
  }

  remove(id: string): Promise<DeleteResult> {
    return this._repository.delete(id);
  }
}