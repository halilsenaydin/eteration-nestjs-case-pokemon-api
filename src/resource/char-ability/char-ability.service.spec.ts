import { Test, TestingModule } from '@nestjs/testing';
import { CharAbilityService } from './char-ability.service';

describe('CharAbilityService', () => {
  let service: CharAbilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharAbilityService],
    }).compile();

    service = module.get<CharAbilityService>(CharAbilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
