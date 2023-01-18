import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Stock {
  @Column()
  date: string

  @Column()
  open: string

  @Column()
  close: string

  @PrimaryColumn()
  name: string
}