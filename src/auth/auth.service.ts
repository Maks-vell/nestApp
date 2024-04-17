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

  async login(dto: CreateUserDto) {
    return this.generateJWTToken(await this.validateUser(dto));
  }

  private async validateUser(dto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(dto.email);
    const passwordEquals = await bcrypt.compare(dto.password, user.password);

    if (!user || !passwordEquals) {
      throw new UnauthorizedException({ message: 'Invalid email or password'});
    }

    return user;
  }

  async registration(dto: CreateUserDto) {
    const variant = await this.userService.getUserByEmail(dto.email);
    if (variant) {
      throw new HttpException('User with this email already exists', HttpStatus.UNAUTHORIZED);
    }

    const hashPass = await bcrypt.hash(dto.password, 10);
    const user = await this.userService.createUser({ ...dto, password: hashPass });
    return this.generateJWTToken(user);
  }

  async generateJWTToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
