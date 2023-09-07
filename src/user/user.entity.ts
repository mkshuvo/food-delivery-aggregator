import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('user')
@Unique(['username', 'email']) // Define a unique constraint for username and email
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  username: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;
}
