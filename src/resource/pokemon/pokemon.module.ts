import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { ServiceModule } from 'src/service/service.module';
import { CharModule } from '../char/char.module';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [ServiceModule, CharModule],
  controllers: [PokemonController],
  providers: [PokemonService]
})
export class PokemonApiModule {}
