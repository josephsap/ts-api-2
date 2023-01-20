import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Model from './Model.entity';
import { User } from './User.entity';

@Entity('posts')
export class Post extends Model {
  @Column({
    length: 100,
    unique: true
  })
  title: string;

  @Column('text')
  content: string;

  @ManyToOne(() => User, (user: User) => user.posts)
  @JoinColumn()
  user!: User; // ! means it can be undefined if it's not assigned in the constructor.
}