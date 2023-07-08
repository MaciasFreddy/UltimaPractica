import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeportistaModule } from './deportista/deportista.module';

@Module({
  imports: [DeportistaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
