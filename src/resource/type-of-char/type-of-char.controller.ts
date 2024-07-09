import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfCharService } from './type-of-char.service';
import { CreateTypeOfCharDto } from './dto/create-type-of-char.dto';
import { UpdateTypeOfCharDto } from './dto/update-type-of-char.dto';

@Controller('type-of-char')
export class TypeOfCharController {
  constructor(private readonly typeOfCharService: TypeOfCharService) {}

  @Post()
  create(@Body() createTypeOfCharDto: CreateTypeOfCharDto) {
    return this.typeOfCharService.save(createTypeOfCharDto);
  }

  @Get()
  findAll() {
    return this.typeOfCharService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeOfCharService.findOne(id);
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
