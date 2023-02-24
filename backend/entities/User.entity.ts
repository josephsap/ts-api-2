import { Entity, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import Model from './Model.entity';
import { Post } from "./Post.entity";
import { Portfolio } from './Portfolio.entity';
// import {IsInt, IsEnum, Min, Max} from 'class-validator';

enum UserRoleType { ADMIN = 'admin', REGULAR = 'regular' };
@Entity('users')
export class User extends Model {
  @Column({ unique: true })
  name: string

  @Column()
  // @IsInt()
  // @Min(0)
  // @Max(123)
  age: number

  // @IsEnum(UserRoleType)
  @Column({
    type: 'enum',
    enum: UserRoleType,
    default: UserRoleType.REGULAR,
    nullable: true
  })
  role: UserRoleType;

  // A user can create many posts but a post
  // can only belong to one user.
  @OneToMany(() => Post, (post: Post) => post.user)
  posts!: Array<Post>;

  @OneToOne(() => Portfolio, (portfolio: Portfolio) => portfolio.user)
  @JoinColumn()
  portfolio!: Portfolio
}
