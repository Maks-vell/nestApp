import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { Role } from './roles.model';

interface IUserRolesCreationAttrs {
}

@Table({ tableName: 'user_roles', createdAt: 'false', updatedAt: 'false' })
export class UserRoles extends Model<UserRoles, IUserRolesCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Identification' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Role)
  @ApiProperty({ example: 'Id role', description: 'Role id from roles' })
  @Column({ type: DataType.INTEGER })
  roleId: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: 'Id user', description: 'User id from users' })
  @Column({ type: DataType.INTEGER })
  UserId: number;
}