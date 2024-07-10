import { Test, TestingModule } from '@nestjs/testing';
import { AbilityOfCharRepository } from './ability-of-char.repository';
import { AbilityOfCharService } from './ability-of-char.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { Repository } from 'typeorm';

describe('AbilityOfCharRepository', () => {
  let repository: AbilityOfCharRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [AbilityOfCharService, AbilityOfCharRepository, Repository],
      exports: [AbilityOfCharService, AbilityOfCharRepository]
    }).compile();

    repository = module.get<AbilityOfCharRepository>(AbilityOfCharRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
