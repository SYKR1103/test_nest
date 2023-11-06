import { Module } from '@nestjs/common';
import { ChulService } from './chul.service';
import { ChulController } from './chul.controller';

@Module({
  controllers: [ChulController],
  providers: [ChulService],
})
export class ChulModule {}
