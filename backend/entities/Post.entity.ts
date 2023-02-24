import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import Model from './Model.entity';
import { User } from './User.entity';
// import { MinLength } from 'class-validator';

@Entity('posts')
export class Post extends Model {
  @Column({
    unique: true,
    nullable: true
  })
  // @MinLength(10)
  title: string;

  @Column('text')
  // @MinLength(5)
  content: string;

  @ManyToOne(() => User, (user: User) => user.posts)
  @JoinColumn()
  user!: User; // ! means it can be undefined if it's not assigned in the constructor.
}