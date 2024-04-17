import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Mail address' })
  @IsString({ message: 'Email must be string' })
  @IsEmail({}, { message: 'Email address must be email' })
  readonly email: string;

  @ApiProperty({ example: 'xxxxx', description: 'Password' })
  @IsString({ message: 'Password must be string' })
  @Length(4, 16, { message: 'Password must be at least 4 characters long < 16 characters long' })
  readonly password: string;
}