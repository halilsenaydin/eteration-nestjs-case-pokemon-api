import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharTypeService } from './char-type.service';
import { CreateCharTypeDto } from './dto/create-char-type.dto';
import { UpdateCharTypeDto } from './dto/update-char-type.dto';

@Controller('char-type')
export class CharTypeController {
  constructor(private readonly charTypeService: CharTypeService) {}

  @Post()
  create(@Body() createCharTypeDto: CreateCharTypeDto) {
    return this.charTypeService.save(createCharTypeDto);
  }

  @Get()
  findAll() {
    return this.charTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charTypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharTypeDto: UpdateCharTypeDto) {
    return this.charTypeService.update(id, updateCharTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charTypeService.remove(id);
  }
}
