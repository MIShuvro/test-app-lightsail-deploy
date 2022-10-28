require('dotenv').config({
  path: process.env.ENV_PATH,
});
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './common/app-config/service/app-config.service';

async function bootstrap() {
  Logger.log('PORT======', process.env.PORT);
  let PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
