import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    console.log('here');
    next()
  });
  app.use(bodyParser.json());

  await app.listen(3000);
}
bootstrap();
