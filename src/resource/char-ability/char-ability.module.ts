import { Module } from '@nestjs/common';
import { CharAbilityService } from './char-ability.service';
import { CharAbilityController } from './char-ability.controller';
import { Repository } from 'typeorm';
import { CharAbilityRepository } from './char-ability.repository';
import { DatabaseModule } from 'src/database/typeorm/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CharAbilityController],
  providers: [CharAbilityService, CharAbilityRepository, Repository],
  exports: [CharAbilityService, CharAbilityRepository]
})
export class CharAbilityModule {}
