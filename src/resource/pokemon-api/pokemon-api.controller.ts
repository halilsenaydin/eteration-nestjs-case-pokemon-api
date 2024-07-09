import { Controller, Get, Post, Param } from '@nestjs/common';
import { PokemonApiService } from 'src/service/pokemon-api.service';
import { CharService } from '../char/char.service';
import SuccessDataResult from 'src/model/successDataResult';
import { CreateCharDto } from '../char/dto/create-char.dto';

@Controller('pokemon-api')
export class PokemonApiController {
  constructor(private readonly pokemonApiService: PokemonApiService,
    private readonly charService: CharService
  ) {}

  @Get()
  async savePokemons() {
    let result = await this.pokemonApiService.getPokemons();
    if(!result){
      return result;
    }

    let savedPokemons = [];
    for (let index = 0; index < result.data.length; index++) {
      const pokemon = result.data[index];
      let createCharDto: CreateCharDto = {
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        isDefault: pokemon.is_default,
        abilities: [],
        charTypes: []
      }

      for (let i = 0; i < pokemon.abilities.length; i++) {
        const charAbility = pokemon.abilities[i];
        createCharDto.abilities.push({
          abilityName: charAbility.ability.name
        });
      }

      for (let i = 0; i < pokemon.types.length; i++) {
        const charType = pokemon.types[i];
        createCharDto.charTypes.push({
          typeName: charType.type.name
        });
      }

      let savePokemon = await this.charService.save(createCharDto);
      if(savePokemon.status){
        savedPokemons.push(savePokemon.data)
      }
    }
    
    return new SuccessDataResult('', savedPokemons);

  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.pokemonApiService.findOne(+id);
  // }
}
