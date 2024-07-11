import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfCharService } from './type-of-char.service';
import { CreateTypeOfCharDto } from './dto/create-type-of-char.dto';
import { UpdateTypeOfCharDto } from './dto/update-type-of-char.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth('jwt')
@ApiTags('/type-of-char')
@Controller('type-of-char')
export class TypeOfCharController {
  constructor(private readonly typeOfCharService: TypeOfCharService) { }

  @Get()
  findAll() {
    return this.typeOfCharService.findAll();
  }

  @Get('/dto')
  findAllDto() {
    return this.typeOfCharService.findAllDto();
  }

  @ApiParam({ name: 'id', example: '0394fdbd-f035-418d-8ad6-2a7c0bfe4482', description: 'The id of the type of char' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeOfCharService.findOne({ id: id });
  }

  @ApiParam({ name: 'id', example: 'd4cc2b24-dd2e-4a56-a2cc-b50c7138b339', description: 'The charId of the type of char' })
  @Get('/char/:id')
  findAllByCharId(@Param('id') id: string) {
    return this.typeOfCharService.findAllByDto({ charId: id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeOfCharDto: UpdateTypeOfCharDto) {
    return this.typeOfCharService.update(id, updateTypeOfCharDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeOfCharService.remove(id);
  }
}
