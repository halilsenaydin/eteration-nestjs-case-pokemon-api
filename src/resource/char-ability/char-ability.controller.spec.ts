import { Test, TestingModule } from '@nestjs/testing';
import { CharAbilityController } from './char-ability.controller';
import { CharAbilityService } from './char-ability.service';

describe('CharAbilityController', () => {
  let controller: CharAbilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharAbilityController],
      providers: [CharAbilityService],
    }).compile();

    controller = module.get<CharAbilityController>(CharAbilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
