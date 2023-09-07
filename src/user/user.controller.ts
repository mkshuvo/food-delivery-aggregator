import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegistrationDto } from './user-registration.dto';

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
}
