import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharAbilityService } from './char-ability.service';
import { CreateCharAbilityDto } from './dto/create-char-ability.dto';
import { UpdateCharAbilityDto } from './dto/update-char-ability.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth('jwt')
@ApiTags('/char-ability')
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

  @ApiParam({ name: 'id', example: '7b8ae564-3c8d-4e94-b5fd-551ebabc5990', description: 'The id of the char ability' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charAbilityService.findOne({id: id});
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
