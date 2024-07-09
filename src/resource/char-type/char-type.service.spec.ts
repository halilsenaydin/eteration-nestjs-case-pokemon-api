import { Test, TestingModule } from '@nestjs/testing';
import { CharTypeService } from './char-type.service';

describe('CharTypeService', () => {
  let service: CharTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharTypeService],
    }).compile();

    service = module.get<CharTypeService>(CharTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
