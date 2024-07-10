import { Test, TestingModule } from '@nestjs/testing';
import { AbilityOfCharController } from './ability-of-char.controller';
import { AbilityOfCharService } from './ability-of-char.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { AbilityOfCharRepository } from './ability-of-char.repository';
import { Repository } from 'typeorm';

describe('AbilityOfCharController', () => {
  let controller: AbilityOfCharController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [AbilityOfCharController],
      providers: [AbilityOfCharService, AbilityOfCharRepository, Repository],
      exports: [AbilityOfCharService, AbilityOfCharRepository]
    }).compile();

    controller = module.get<AbilityOfCharController>(AbilityOfCharController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
