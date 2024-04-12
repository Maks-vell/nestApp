import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface IUserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, IUserCreationAttrs>{
  @ApiProperty({example: '1', description: 'Identification'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id:number;

  @ApiProperty({example: 'user@mail.ru', description: 'Mail address'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email:string;

  @ApiProperty({example: 'xxxxx', description: 'Password'})
  @Column({type: DataType.STRING, allowNull: false})
  password:string;

  @ApiProperty({example: 'true', description: 'Was user banned'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'Idiot', description: 'Reason on the ban'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason:string;
}