// auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findByUsername(username);

    if (user && await user.comparePassword(password)) {
      return user;
    }

    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async refreshAccessToken(userId: number): Promise<string> {
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const payload = { username: user.username, sub: user.id };

    return this.jwtService.sign(payload);
  }
  async generateAccessToken(user: User): Promise<string> {
    const payload = { sub: user.id, username: user.username }; // Customize the payload as needed
    return this.jwtService.sign(payload);
  }
}
