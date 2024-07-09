import { Test, TestingModule } from '@nestjs/testing';
import { AbilityOfCharController } from './ability-of-char.controller';
import { AbilityOfCharService } from './ability-of-char.service';

describe('AbilityOfCharController', () => {
  let controller: AbilityOfCharController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbilityOfCharController],
      providers: [AbilityOfCharService],
    }).compile();

    controller = module.get<AbilityOfCharController>(AbilityOfCharController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
