require('dotenv').config({
  path: process.env.ENV_PATH,
});
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './common/app-config/service/app-config.service';

async function bootstrap() {
  console.log('PORT======',process.env.PORT);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
