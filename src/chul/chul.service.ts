import { Injectable } from '@nestjs/common';
import { CreateChulDto } from './dto/create-chul.dto';
import { UpdateChulDto } from './dto/update-chul.dto';

@Injectable()
export class ChulService {
  create(createChulDto: CreateChulDto) {
    return 'This action adds a new chul';
  }

  findAll() {
    return `This action returns all chul`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chul`;
  }

  update(id: number, updateChulDto: UpdateChulDto) {
    return `This action updates a #${id} chul`;
  }

  remove(id: number) {
    return `This action removes a #${id} chul`;
  }
}
