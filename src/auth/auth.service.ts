import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/users.model';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
              private jwtService: JwtService) {
  }

  async login(createUserDto: CreateUserDto) {
    return this.generateJWTToken(await this.validateUser(createUserDto));
  }

  async registration(createUserDto: CreateUserDto) {
    const variant = await this.userService.getUserByEmail(createUserDto.email);
    if (variant) {
      throw new HttpException('User with this email already exists', HttpStatus.UNAUTHORIZED);
    }

    const hashPass = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.userService.createUser({ ...createUserDto, password: hashPass });
    return this.generateJWTToken(user);
  }

  async generateJWTToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(createUserDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(createUserDto.email);
    const passwordEquals = await bcrypt.compare(createUserDto.password, user.password);

    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Invalid email or password' });
  }
}
