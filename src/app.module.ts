import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressPoolService } from './address-pool.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AddressPoolService],
})
export class AppModule {}
