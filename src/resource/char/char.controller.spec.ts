import { Test, TestingModule } from '@nestjs/testing';
import { CharController } from './char.controller';
import { CharService } from './char.service';

describe('CharController', () => {
  let controller: CharController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharController],
      providers: [CharService],
    }).compile();

    controller = module.get<CharController>(CharController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
