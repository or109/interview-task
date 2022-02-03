import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RequestParams } from './request-params';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/onboarding')
  @HttpCode(HttpStatus.OK)
  onboarding(@Body() body: RequestParams): string {
    const results = this.appService.onboarding(body.name, body.key);
    return JSON.stringify(results);
  }

  @Post('/offboarding')
  offboarding(@Body() body: RequestParams): string {
    if (this.appService.offboarding(body.key)) {
      return;
    }

    throw new Error(`Peer[${body.key}] was not onboarded`);
  }
}
