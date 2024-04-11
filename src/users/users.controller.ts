import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() UserDto: CreateUserDto) {
    return this.usersService.createUser(UserDto);
  }

  @Get()
  getAll(){
    return this.usersService.getAllUsers();
  }
}
