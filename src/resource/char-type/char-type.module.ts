import { Module } from '@nestjs/common';
import { CharTypeService } from './char-type.service';
import { CharTypeController } from './char-type.controller';
import { CharTypeRepository } from './char-type.repository';
import { Repository } from 'typeorm';
import { DatabaseModule } from 'src/database/typeorm/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CharTypeController],
  providers: [CharTypeService, CharTypeRepository, Repository],
  exports: [CharTypeService]
})
export class CharTypeModule {}
