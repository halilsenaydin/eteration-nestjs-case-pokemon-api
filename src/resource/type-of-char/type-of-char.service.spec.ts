import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfCharService } from './type-of-char.service';

describe('TypeOfCharService', () => {
  let service: TypeOfCharService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfCharService],
    }).compile();

    service = module.get<TypeOfCharService>(TypeOfCharService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
