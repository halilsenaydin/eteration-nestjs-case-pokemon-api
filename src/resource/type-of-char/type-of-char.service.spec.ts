import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfCharService } from './type-of-char.service';
import { TypeOfCharRepository } from './type-of-char.repository';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { TypeOfCharController } from './type-of-char.controller';
import { Repository } from 'typeorm';

describe('TypeOfCharService', () => {
  let service: TypeOfCharService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [TypeOfCharController],
      providers: [TypeOfCharService, TypeOfCharRepository, Repository],
      exports: [TypeOfCharService, TypeOfCharRepository]
    }).compile();

    service = module.get<TypeOfCharService>(TypeOfCharService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
