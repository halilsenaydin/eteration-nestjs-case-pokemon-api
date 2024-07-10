import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { PokemonService } from './pokemon.service';

@ApiBearerAuth('jwt')
@ApiTags('/pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService
  ) {}

  @Get('/:startId/:endId')
  @ApiParam({ name: 'startId', example: 1, description: 'Start id, must have min 1!' })
  @ApiParam({ name: 'endId', example: 20, description: 'End id, must have max 150!' })
  savePokemons(@Param('startId') startId: number, @Param('endId') endId: number) {
    return this.pokemonService.syncSave(startId, endId);
  }
}
