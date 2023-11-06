import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ChulModule } from './chul/chul.module';

@Module({
  imports: [ProductModule, ChulModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
