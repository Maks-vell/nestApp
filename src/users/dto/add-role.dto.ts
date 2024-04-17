import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'USER', description: 'new user role' })
  @IsString({message: 'must be string'})
  readonly value: string;

  @ApiProperty({ example: '123', description: 'user id which get role' })
  @IsNumber({},{message: 'must be number'})
  readonly userId: number;
}