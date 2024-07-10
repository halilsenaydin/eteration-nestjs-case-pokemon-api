import { Test, TestingModule } from '@nestjs/testing';
import { CharAbilityRepository } from './char-ability.repository';
import { CharAbilityService } from './char-ability.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { Repository } from 'typeorm';

describe('CharAbilityRepository', () => {
  let repository: CharAbilityRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [CharAbilityService, CharAbilityRepository, Repository],
      exports: [CharAbilityService, CharAbilityRepository]
    }).compile();

    repository = module.get<CharAbilityRepository>(CharAbilityRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
