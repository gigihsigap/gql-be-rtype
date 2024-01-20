import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { config, initConfig } from './config';

async function bootstrap() {
  await initConfig();
  const port = Number(process.env.SERVER_PORT ?? config().server.port);
  const app = await NestFactory.create(UserModule);
  await app.listen(port);
  console.info(`User service is running at port ${port}!`);
}
bootstrap();
