import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ChulModule } from './chul/chul.module';
import { ConfigModule } from '@nestjs/config';
import { DatabasekimchiModule } from './databasekimchi/databasekimchi.module';
import Joi from '@hapi/joi';

@Module({
  imports : [
    ConfigModule.forRoot({

      validationSchema : Joi.object({

        POSTGRES_HOST : Joi.string().required(),
        POSTGRES_PORT : Joi.number().required(),
        POSTGRES_USER : Joi.string().required(),
        POSTGRES_PASSWORD : Joi.string().required(),
        POSTGRES_DB : Joi.string().required(),

      })

    }),
    ProductModule,
    DatabasekimchiModule],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
