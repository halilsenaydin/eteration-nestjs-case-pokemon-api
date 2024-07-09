import { Module } from '@nestjs/common';
import { TypeOfCharService } from './type-of-char.service';
import { TypeOfCharController } from './type-of-char.controller';
import { TypeOfCharRepository } from './type-of-char.repository';
import { Repository } from 'typeorm';
import { DatabaseModule } from 'src/database/typeorm/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TypeOfCharController],
  providers: [TypeOfCharService, TypeOfCharRepository, Repository],
  exports: [TypeOfCharService]
})
export class TypeOfCharModule {}
