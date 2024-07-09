import { Module } from '@nestjs/common';
import { CharModule } from './resource/char/char.module';
import { DatabaseModule } from './database/typeorm/database.module';
import { CharTypeModule } from './resource/char-type/char-type.module';
import { ServiceModule } from './service/service.module';
import { PokemonApiModule } from './resource/pokemon-api/pokemon-api.module';
import { CharAbilityModule } from './resource/char-ability/char-ability.module';
import { AbilityOfCharModule } from './resource/ability-of-char/ability-of-char.module';
import { TypeOfCharModule } from './resource/type-of-char/type-of-char.module';

@Module({
  imports: [
    CharModule, DatabaseModule, CharTypeModule, ServiceModule, PokemonApiModule, CharAbilityModule, AbilityOfCharModule, TypeOfCharModule],
})
export class AppModule {}
