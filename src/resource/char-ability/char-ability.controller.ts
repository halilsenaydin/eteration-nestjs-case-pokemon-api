import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharAbilityService } from './char-ability.service';
import { CreateCharAbilityDto } from './dto/create-char-ability.dto';
import { UpdateCharAbilityDto } from './dto/update-char-ability.dto';

@Controller('char-ability')
export class CharAbilityController {
  constructor(private readonly charAbilityService: CharAbilityService) {}

  @Post()
  create(@Body() createCharAbilityDto: CreateCharAbilityDto) {
    return this.charAbilityService.save(createCharAbilityDto);
  }

  @Get()
  findAll() {
    return this.charAbilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charAbilityService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharAbilityDto: UpdateCharAbilityDto) {
    return this.charAbilityService.update(id, updateCharAbilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charAbilityService.remove(id);
  }
}
