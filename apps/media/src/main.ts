import { NestFactory } from '@nestjs/core';
import { MediaModule } from './media.module';
import { config, initConfig } from './config';

async function bootstrap() {
  await initConfig();
  const port = Number(process.env.SERVER_PORT ?? config().server.port);
  const app = await NestFactory.create(MediaModule);
  await app.listen(port);
  console.info(`Media service is running at port ${port}!`);
}
bootstrap();
