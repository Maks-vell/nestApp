import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Mail address' })
  readonly email: string;
  @ApiProperty({ example: 'xxxxx', description: 'Password' })
  readonly password: string;
}