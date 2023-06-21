import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateJobDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  telephone: number;
}
