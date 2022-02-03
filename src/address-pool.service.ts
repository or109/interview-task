import { Injectable } from '@nestjs/common';
import * as chance from 'chance';

@Injectable()
export class AddressPoolService {
  private readonly overlay = '172.16.0.0/16';

  public getNewVirtualIP(): string {
    return chance().ip(); // should use a sequence or a way to allocate th IP so there wont be conflicts
  }
}
