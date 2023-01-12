import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Model from './Model.entity';

@Entity()
export class User extends Model {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
