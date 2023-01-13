import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: string

  @Column({
    length: 100
  })
  title: string

  @Column('text')
  content: string
}