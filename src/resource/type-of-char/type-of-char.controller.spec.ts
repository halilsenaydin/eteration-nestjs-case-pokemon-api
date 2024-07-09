import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfCharController } from './type-of-char.controller';
import { TypeOfCharService } from './type-of-char.service';

describe('TypeOfCharController', () => {
  let controller: TypeOfCharController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOfCharController],
      providers: [TypeOfCharService],
    }).compile();

    controller = module.get<TypeOfCharController>(TypeOfCharController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
