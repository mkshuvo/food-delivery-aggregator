import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import the TypeOrmModule
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // Change this according to your database type
      host: process.env.POSTGRES_HOST, // Change to your database host
      port: parseInt(process.env.POSTGRES_PORT, 10), // Parse the port as a number
      username: process.env.POSTGRES_USER, // Change to your database username
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB, // Change to your database name
      entities: [User], // Add all your entities here
      synchronize: true, // Only for development; set to false in production
    }),
  ],
})
export class AppModule {}
