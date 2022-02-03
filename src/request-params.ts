import { IsNotEmpty, IsString } from 'class-validator';

export class RequestParams {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public key: string;
}
