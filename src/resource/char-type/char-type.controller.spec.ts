import { Test, TestingModule } from '@nestjs/testing';
import { CharTypeController } from './char-type.controller';
import { CharTypeService } from './char-type.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { CharTypeRepository } from './char-type.repository';
import { Repository } from 'typeorm';

describe('CharTypeController', () => {
  let controller: CharTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [CharTypeController],
      providers: [CharTypeService, CharTypeRepository, Repository],
      exports: [CharTypeService, CharTypeRepository]
    }).compile();

    controller = module.get<CharTypeController>(CharTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
