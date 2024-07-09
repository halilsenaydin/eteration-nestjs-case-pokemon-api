import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbilityOfCharService } from './ability-of-char.service';
import { CreateAbilityOfCharDto } from './dto/create-ability-of-char.dto';
import { UpdateAbilityOfCharDto } from './dto/update-ability-of-char.dto';

@Controller('ability-of-char')
export class AbilityOfCharController {
  constructor(private readonly abilityOfCharService: AbilityOfCharService) {}

  @Post()
  create(@Body() createAbilityOfCharDto: CreateAbilityOfCharDto) {
    return this.abilityOfCharService.save(createAbilityOfCharDto);
  }

  @Get()
  findAll() {
    return this.abilityOfCharService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abilityOfCharService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbilityOfCharDto: UpdateAbilityOfCharDto) {
    return this.abilityOfCharService.update(id, updateAbilityOfCharDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abilityOfCharService.remove(id);
  }
}
