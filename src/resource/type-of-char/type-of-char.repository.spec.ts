import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfCharRepository } from './type-of-char.repository';
import { TypeOfCharService } from './type-of-char.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { Repository } from 'typeorm';

describe('TypeOfCharRepository', () => {
  let repository: TypeOfCharRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [TypeOfCharRepository],
      providers: [TypeOfCharService, TypeOfCharRepository, Repository],
      exports: [TypeOfCharService, TypeOfCharRepository]
    }).compile();

    repository = module.get<TypeOfCharRepository>(TypeOfCharRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
