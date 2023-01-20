import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Model from './Model.entity';
import { Post } from "./Post.entity";

type UserRoleType = 'admin' | 'regular';
@Entity('users')
export class User extends Model {
    @Column({ unique: true })
    name: string

    @Column()
    age: number

    @Column({
    type: 'enum',
    enum: ['admin', 'regular'],
    default: 'regular'
    })
    role: UserRoleType;

    // A user can create many posts but a post
    // can only belong to one user.
    @OneToMany(() => Post, (post: Post) => post.user)
    posts!: Array<Post>;
}
