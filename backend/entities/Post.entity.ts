import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Model from './Model.entity';
import { User } from './User.entity';

@Entity('posts')
export class Post extends Model {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    length: 100,
    unique: true
  })
  title: string;

  @Column('text')
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ referencedColumnName: 'name' })
  user: User;
}