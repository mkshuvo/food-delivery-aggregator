import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserRegistrationDto } from './user-registration.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findById(userId: number): Promise<User | undefined> {
        try {
            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (!user) {
                throw new NotFoundException('User not found');
            }
            return user;
        } catch (e) {
            throw new NotFoundException('User not found');
        }
    }
    

    async findByUsername(username: string): Promise<User | undefined> {
        try {
            const user = await this.userRepository.findOne({ where: { username } });
            return user;
        } catch (e) {
            throw new Error('Error finding user by username');
        }
    }

    async register(userRegistrationDto: UserRegistrationDto): Promise<User> {
        const { username, email, password } = userRegistrationDto;
    
        // Check if the email is already in use
        const existingUser = await this.userRepository.findOne({ where: { email } });
        const existingUserName = await this.userRepository.findOne({ where: { username } });
    
        if (existingUser) {
          throw new ConflictException('Email already in use');
        }

        if (existingUserName) {
            throw new ConflictException('Username already in use');
          }
    
        // Create a new user entity
        const newUser = this.userRepository.create({ username, email, password });
    
        // Save the user to the database
        return await this.userRepository.save(newUser);
      }

      async findByRefreshToken(refreshToken: string) {
        try {
          const user = await this.userRepository.findOne({ where: { refreshToken } });
          return user;
        } catch (e) {
          throw new Error('User Not found');
        }
      }
}
