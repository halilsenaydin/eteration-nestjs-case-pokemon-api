import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { ServiceModule } from 'src/service/service.module';
import { CharModule } from '../char/char.module';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let controller: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ServiceModule, CharModule],
      controllers: [PokemonController],
      providers: [PokemonService]
    }).compile();

    controller = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
