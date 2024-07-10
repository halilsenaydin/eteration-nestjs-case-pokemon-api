import { Test, TestingModule } from '@nestjs/testing';
import { CharAbilityService } from './char-ability.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { CharAbilityController } from './char-ability.controller';
import { CharAbilityRepository } from './char-ability.repository';
import { Repository } from 'typeorm';

describe('CharAbilityService', () => {
  let service: CharAbilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [CharAbilityController],
      providers: [CharAbilityService, CharAbilityRepository, Repository],
      exports: [CharAbilityService, CharAbilityRepository]
    }).compile();

    service = module.get<CharAbilityService>(CharAbilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
