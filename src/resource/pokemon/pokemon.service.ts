import { Injectable } from '@nestjs/common';
import { PokemonApiService } from 'src/service/pokemon-api.service';
import { CharService } from '../char/char.service';
import { CreateCharDto } from '../char/dto/create-char.dto';
import SuccessDataResult from 'src/model/successDataResult';

@Injectable()
export class PokemonService {
  constructor(
    private readonly pokemonApiService: PokemonApiService,
    private readonly charService: CharService
  ) { }

  async syncSave(startId: number, endId: number) {
    let result = await this.pokemonApiService.getPokemons(startId, endId);
    if (!result) {
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

      let savePokemon = await this.charService.saveOrUpdate(createCharDto);
      if (savePokemon.status) {
        savedPokemons.push(savePokemon.data)
      }
    }

    return new SuccessDataResult('', savedPokemons);
  }

}
