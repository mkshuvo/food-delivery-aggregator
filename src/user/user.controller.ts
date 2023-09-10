import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegistrationDto } from './user-registration.dto';
import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth.guard';
import { UserLoginDto } from 'src/auth/dto/user-login.dto';

@Controller('user')
export class UserController {
    userRepository: any;
    constructor(private readonly userService: UserService) { }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }
    @Post('register')
    async register(@Body() userRegistrationDto: UserRegistrationDto) {
        // Call the user service method to handle registration
        const registeredUser = await this.userService.register(userRegistrationDto);

        // Return the registered user or any appropriate response
        return registeredUser;
    }

    @UseGuards(JwtAuthGuard)
    @Get('protected-route')
    async getProtectedData(@Request() req, @Body() userLoginDto: UserLoginDto) {
      // Access the user's information from the request
      const user = req.user;

      // Your protected route logic here
      return {
        message: 'This is protected data',
        user,
        loginInfo: userLoginDto, // Include the UserLoginDto in the response
      };
    }
}
