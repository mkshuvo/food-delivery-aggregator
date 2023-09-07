// auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key', // Replace with your actual secret key
    });
  }

  async validate(payload: any) {
    // The `payload` contains the data you encoded in the JWT token.
    // Here, you can fetch the user data based on the payload's information.
    const { username } = payload; // Extract the username from the payload

    const user = await this.authService.validateUser(username, null); // Pass null for password here

    if (!user) {
      // If the user is not found, you can throw an UnauthorizedException or handle it accordingly.
      throw new UnauthorizedException();
    }

    return user;
  }
}
