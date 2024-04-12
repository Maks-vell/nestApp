import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role' })
  readonly value: string;
  @ApiProperty({ example: 'Administrator', description: 'Description' })
  readonly decsription: string;
}