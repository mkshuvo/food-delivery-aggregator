import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserRegistrationDto {
    @IsString()
    @MinLength(4)
    username: string; // Make sure "username" is defined here.

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6) // Minimum password length
    password: string;
}
