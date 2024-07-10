import { Module } from '@nestjs/common';
import { AbilityOfCharService } from './ability-of-char.service';
import { AbilityOfCharController } from './ability-of-char.controller';
import { AbilityOfCharRepository } from './ability-of-char.repository';
import { Repository } from 'typeorm';
import { DatabaseModule } from 'src/database/typeorm/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AbilityOfCharController],
  providers: [AbilityOfCharService, AbilityOfCharRepository, Repository],
  exports: [AbilityOfCharService, AbilityOfCharRepository]
})
export class AbilityOfCharModule {}
