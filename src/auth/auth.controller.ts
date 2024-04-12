import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  }

  @Post('/registration')
  registration(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }
}
