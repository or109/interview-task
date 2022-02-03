import { IsNotEmpty, IsString } from 'class-validator';

export class RequestParams {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public key: string; // here we should validate for 32-bit, for the moment it's only checks string no empty
}
