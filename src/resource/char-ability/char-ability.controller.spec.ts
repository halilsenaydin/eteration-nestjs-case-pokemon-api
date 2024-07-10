import { Test, TestingModule } from '@nestjs/testing';
import { CharAbilityController } from './char-ability.controller';
import { CharAbilityService } from './char-ability.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { CharAbilityRepository } from './char-ability.repository';
import { Repository } from 'typeorm';

describe('CharAbilityController', () => {
  let controller: CharAbilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [CharAbilityController],
      providers: [CharAbilityService, CharAbilityRepository, Repository],
      exports: [CharAbilityService, CharAbilityRepository]
    }).compile();

    controller = module.get<CharAbilityController>(CharAbilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
