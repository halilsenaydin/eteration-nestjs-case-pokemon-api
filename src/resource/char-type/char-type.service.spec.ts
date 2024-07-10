import { Test, TestingModule } from '@nestjs/testing';
import { CharTypeService } from './char-type.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { CharTypeController } from './char-type.controller';
import { CharTypeRepository } from './char-type.repository';
import { Repository } from 'typeorm';

describe('CharTypeService', () => {
  let service: CharTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [CharTypeController],
      providers: [CharTypeService, CharTypeRepository, Repository],
      exports: [CharTypeService, CharTypeRepository]
    }).compile();

    service = module.get<CharTypeService>(CharTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
