import { Test, TestingModule } from '@nestjs/testing';
import { AbilityOfCharService } from './ability-of-char.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { AbilityOfCharController } from './ability-of-char.controller';
import { AbilityOfCharRepository } from './ability-of-char.repository';
import { Repository } from 'typeorm';

describe('AbilityOfCharService', () => {
  let service: AbilityOfCharService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [AbilityOfCharController],
      providers: [AbilityOfCharService, AbilityOfCharRepository, Repository],
      exports: [AbilityOfCharService, AbilityOfCharRepository]
    }).compile();

    service = module.get<AbilityOfCharService>(AbilityOfCharService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
