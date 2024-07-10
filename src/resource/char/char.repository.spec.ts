import { Test, TestingModule } from '@nestjs/testing';
import { CharRepository } from './char.repository';
import { CharService } from './char.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { CharAbilityModule } from '../char-ability/char-ability.module';
import { CharTypeModule } from '../char-type/char-type.module';
import { AbilityOfCharModule } from '../ability-of-char/ability-of-char.module';
import { TypeOfCharModule } from '../type-of-char/type-of-char.module';
import { Repository } from 'typeorm';

describe('CharRepository', () => {
  let repository: CharRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, CharAbilityModule, CharTypeModule, AbilityOfCharModule, TypeOfCharModule],
      providers: [CharService, CharRepository, Repository],
      exports: [CharService]
    }).compile();

    repository = module.get<CharRepository>(CharRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
