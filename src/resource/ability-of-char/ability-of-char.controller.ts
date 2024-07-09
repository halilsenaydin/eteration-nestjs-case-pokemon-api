import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbilityOfCharService } from './ability-of-char.service';
import { CreateAbilityOfCharDto } from './dto/create-ability-of-char.dto';
import { UpdateAbilityOfCharDto } from './dto/update-ability-of-char.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('/ability-of-char')
@ApiBearerAuth('jwt')
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

  @ApiParam({ name: 'id', example: '1a7cda5f-b535-48ba-b5e2-e953e5ad5481', description: 'The id of the ability of char' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abilityOfCharService.findOne({id: id});
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
