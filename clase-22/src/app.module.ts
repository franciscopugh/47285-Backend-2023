import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NestModule } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import FirstMiddleware from './middlewares/FirstMiddleware';

@Module({
  imports: [

    ConfigModule.forRoot(),
    //Utilizar un .env
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>("MONGO_ATLAS_URL")
      })
    }),
    UsersModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  //Configurar todos los middlewares
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL })
  }
}
