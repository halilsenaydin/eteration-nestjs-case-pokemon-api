import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfCharController } from './type-of-char.controller';
import { TypeOfCharService } from './type-of-char.service';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { TypeOfCharRepository } from './type-of-char.repository';
import { Repository } from 'typeorm';

describe('TypeOfCharController', () => {
  let controller: TypeOfCharController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [TypeOfCharController],
      providers: [TypeOfCharService, TypeOfCharRepository, Repository],
      exports: [TypeOfCharService, TypeOfCharRepository]
    }).compile();

    controller = module.get<TypeOfCharController>(TypeOfCharController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
