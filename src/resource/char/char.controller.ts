import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharService } from './char.service';
import { CreateCharDto } from './dto/create-char.dto';
import { UpdateCharDto } from './dto/update-char.dto';

@Controller('char')
export class CharController {
  constructor(private readonly charService: CharService) {}

  @Post()
  create(@Body() createCharDto: CreateCharDto) {
    return this.charService.save(createCharDto);
  }

  @Get()
  findAll() {
    let result = this.charService.findAll();
    return result;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharDto: UpdateCharDto) {
    return this.charService.update(id, updateCharDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charService.remove(id);
  }
}
