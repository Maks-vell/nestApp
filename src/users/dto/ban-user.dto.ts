import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: '123', description: 'user id witch was banned' })
  readonly userId: number;
  @ApiProperty({ example: 'Bich', description: 'Reason why user was banned' })
  readonly banReason: string;
}