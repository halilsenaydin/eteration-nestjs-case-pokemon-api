import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokemonApiService } from './pokemon-api.service';

@Module({
  imports: [HttpModule],
  providers: [PokemonApiService],
  exports: [PokemonApiService]
})
export class ServiceModule {}
