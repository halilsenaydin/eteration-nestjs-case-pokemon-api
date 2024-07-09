import { Test, TestingModule } from '@nestjs/testing';
import { AbilityOfCharService } from './ability-of-char.service';

describe('AbilityOfCharService', () => {
  let service: AbilityOfCharService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbilityOfCharService],
    }).compile();

    service = module.get<AbilityOfCharService>(AbilityOfCharService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
