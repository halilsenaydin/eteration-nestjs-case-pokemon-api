import { Module } from '@nestjs/common';
import { PokemonApiController } from './pokemon-api.controller';
import { ServiceModule } from 'src/service/service.module';
import { CharModule } from '../char/char.module';

@Module({
  imports: [ServiceModule, CharModule],
  controllers: [PokemonApiController],
})
export class PokemonApiModule {}
