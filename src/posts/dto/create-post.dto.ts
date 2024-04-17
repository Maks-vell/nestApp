import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Title', description: 'title new post' })
  @IsString({message: 'must be string'})
  readonly title: string;

  @ApiProperty({ example: '...', description: 'all text content in post' })
  @IsString({message: 'must be string'})
  readonly content: string;

  @ApiProperty({ example: '123', description: 'user id' })
 // @IsNumber({},{message: 'must be number'})
  readonly userId: number;
}