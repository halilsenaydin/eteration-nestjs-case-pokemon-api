import { Test, TestingModule } from '@nestjs/testing';
import { CharTypeRepository } from './char-type.repository';
import { CharTypeService } from './char-type.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { Repository } from 'typeorm';

describe('CharTypeRepository', () => {
  let repository: CharTypeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [CharTypeService, CharTypeRepository, Repository],
      exports: [CharTypeService, CharTypeRepository]
    }).compile();

    repository = module.get<CharTypeRepository>(CharTypeRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
