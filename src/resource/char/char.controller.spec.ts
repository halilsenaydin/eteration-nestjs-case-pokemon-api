import { Test, TestingModule } from '@nestjs/testing';
import { CharController } from './char.controller';
import { CharService } from './char.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { CharAbilityModule } from '../char-ability/char-ability.module';
import { CharTypeModule } from '../char-type/char-type.module';
import { AbilityOfCharModule } from '../ability-of-char/ability-of-char.module';
import { TypeOfCharModule } from '../type-of-char/type-of-char.module';
import { CharRepository } from './char.repository';
import { Repository } from 'typeorm';

describe('CharController', () => {
  let controller: CharController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, CharAbilityModule, CharTypeModule, AbilityOfCharModule, TypeOfCharModule],
      controllers: [CharController],
      providers: [CharService, CharRepository, Repository],
      exports: [CharService]
    }).compile();

    controller = module.get<CharController>(CharController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
