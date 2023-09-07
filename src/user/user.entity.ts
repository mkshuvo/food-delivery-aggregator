// user/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

@Entity('user')
@Unique(['username', 'email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  username: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ nullable: true }) // Add this line for refresh tokens
  refreshToken: string | null;

  async comparePassword(password: string): Promise<boolean> {
    // Compare the provided password with the stored password hash
    // Return true if they match, false otherwise
    return bcryptjs.compare(password, this.password);
  }
}
