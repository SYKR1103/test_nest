import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChulService } from './chul.service';
import { CreateChulDto } from './dto/create-chul.dto';
import { UpdateChulDto } from './dto/update-chul.dto';

@Controller('chul')
export class ChulController {
  constructor(private readonly chulService: ChulService) {}

  @Post()
  create(@Body() createChulDto: CreateChulDto) {
    return this.chulService.create(createChulDto);
  }

  @Get()
  findAll() {
    return this.chulService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chulService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChulDto: UpdateChulDto) {
    return this.chulService.update(+id, updateChulDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chulService.remove(+id);
  }
}
