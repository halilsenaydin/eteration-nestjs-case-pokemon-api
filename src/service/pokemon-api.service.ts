import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import ErrorDataResult from 'src/model/errorDataResult';
import SuccessDataResult from 'src/model/successDataResult';

@Injectable()
export class PokemonApiService {
    private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';
    private readonly pokemonCount = 15;
    constructor(private readonly httpService: HttpService) { }

    async getPokemons() {
        let pokemons: any[] = [];
        try {
            const requests = [];
            for (let id = 1; id <= this.pokemonCount; id++) {
                requests.push(firstValueFrom(this.httpService.get(`${this.apiUrl}/${id}`)));
            }

            const responses = await Promise.all(requests);

            responses.forEach(response => {
                pokemons.push(response.data);
            });

            return new SuccessDataResult('', pokemons);
        } catch (error) {
            return new ErrorDataResult('', null);
        }
    }
}
