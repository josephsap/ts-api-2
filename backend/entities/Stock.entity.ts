import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('stocks')
export class Stock {
  @Column()
  date: string

  @Column()
  open: string

  @Column()
  close: string

  @Column()
  name: string

  @PrimaryColumn()
  id: string;
}