import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CharService } from './char.service';
import { CreateCharDto } from './dto/create-char.dto';
import { UpdateCharDto } from './dto/update-char.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('/char')
@ApiBearerAuth('jwt')
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

  @Get('/dto')
  findAllDto() {
    let result = this.charService.findAllDto();
    return result;
  }

  @Get(':id')
  @ApiParam({ name: 'id', example: '1eafe086-8a5a-41b8-bc06-aab00d901cd8', description: 'The id of the char' })
  findOne(@Param('id') id: string) {
    return this.charService.findOne({id: id});
  }

  @Get('/dto/:id')
  @ApiParam({ name: 'id', example: '1eafe086-8a5a-41b8-bc06-aab00d901cd8', description: 'The id of the char' })
  findOneDto(@Param('id') id: string) {
    return this.charService.findOneDto({id: id});
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
