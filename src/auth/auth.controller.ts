// auth/auth.controller.ts
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './user-login.dto';
import { RefreshTokenDto } from './refresh-token.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserService } from 'src/user/user.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() userLoginDto: UserLoginDto) {
    // Call your authentication service to validate the user's credentials
    const user = await this.authService.validateUser(
      userLoginDto.username,
      userLoginDto.password,
    );

    if (!user) {
      // If authentication fails, return an appropriate response
      return { message: 'Invalid credentials' };
    }

    // If authentication is successful, generate a JWT token
    const accessToken = this.authService.generateAccessToken(user);

    // Return the JWT token as a response
    return { accessToken };
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh-token')
  async refreshAccessToken(refreshTokenDto: RefreshTokenDto): Promise<string> {
    const { refreshToken } = refreshTokenDto;

    // Validate the refresh token here (e.g., check against a database)
    // Replace the following code with your own logic
    if (refreshToken !== 'valid_refresh_token') {
      throw new Error('Invalid refresh token');
    }

    // Find the user associated with the refresh token (you might need to modify your User service)
    const user = await this.userService.findByRefreshToken(refreshToken);

    if (!user) {
      throw new Error('User not found');
    }

    // Generate a new access token
    return this.authService.generateAccessToken(user);
  }
  // async generateAccessToken(user: User): Promise<string> {
  //     const payload = { username: user.username, sub: user.id };
  //     return this.jwtService.sign(payload);
  // }
}
