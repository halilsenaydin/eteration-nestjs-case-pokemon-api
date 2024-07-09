import { Test, TestingModule } from '@nestjs/testing';
import { CharTypeController } from './char-type.controller';
import { CharTypeService } from './char-type.service';

describe('CharTypeController', () => {
  let controller: CharTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharTypeController],
      providers: [CharTypeService],
    }).compile();

    controller = module.get<CharTypeController>(CharTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
