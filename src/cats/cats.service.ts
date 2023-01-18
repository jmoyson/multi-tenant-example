import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  create(companyId: string, createCatDto: CreateCatDto) {
    return this.catRepository.save({ ...createCatDto, companyId });
  }

  findAll(companyId: string) {
    return this.catRepository.find({ where: { companyId } });
  }

  findOne(companyId: string, id: number) {
    return this.catRepository.findOne({ where: { companyId, id } });
  }

  update(companyId: string, id: number, updateCatDto: UpdateCatDto) {
    return this.catRepository.update(
      { id, companyId },
      { ...updateCatDto, companyId },
    );
  }

  async remove(companyId: string, id: number) {
    const cat = await this.catRepository.findOne({ where: { id, companyId } });
    return this.catRepository.remove(cat);
  }
}
