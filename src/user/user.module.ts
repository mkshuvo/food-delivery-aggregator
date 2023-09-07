import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';// Import the UserRepository
import { User } from './user.entity'; // Import the User entity

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Include both User entity and UserRepository
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Export UserService if needed in other modules
})
export class UserModule {}
