import { Module } from '@nestjs/common';
import { CharService } from './char.service';
import { CharController } from './char.controller';
import { DatabaseModule } from 'src/database/typeorm/database.module';
import { CharRepository } from './char.repository';
import { Repository } from 'typeorm';
import { CharAbilityModule } from '../char-ability/char-ability.module';
import { CharTypeModule } from '../char-type/char-type.module';
import { AbilityOfCharModule } from '../ability-of-char/ability-of-char.module';
import { TypeOfCharModule } from '../type-of-char/type-of-char.module';

@Module({
  imports: [DatabaseModule, CharAbilityModule, CharTypeModule, AbilityOfCharModule, TypeOfCharModule],
  controllers: [CharController],
  providers: [CharService, CharRepository, Repository],
  exports: [CharService]
})
export class CharModule {}
