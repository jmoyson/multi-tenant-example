import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(
    @Query('companyId') companyId: string,
    @Body() createCatDto: CreateCatDto,
  ) {
    return this.catsService.create(companyId, createCatDto);
  }

  @Get()
  findAll(@Query('companyId') companyId: string) {
    return this.catsService.findAll(companyId);
  }

  @Get(':id')
  findOne(@Query('companyId') companyId: string, @Param('id') id: string) {
    return this.catsService.findOne(companyId, +id);
  }

  @Patch(':id')
  update(
    @Query('companyId') companyId: string,
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return this.catsService.update(companyId, +id, updateCatDto);
  }

  @Delete(':id')
  remove(@Query('companyId') companyId: string, @Param('id') id: string) {
    return this.catsService.remove(companyId, +id);
  }
}
