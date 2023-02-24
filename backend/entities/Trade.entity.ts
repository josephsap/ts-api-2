import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import Model from './Model.entity';
import { Portfolio } from './Portfolio.entity';

@Entity('trades')
export class Trade extends Model {
  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  total: number;

  @Column()
  pricePerShare: number;
  
  @ManyToOne(() => Portfolio, (portfolio: Portfolio) => portfolio.trades)
  @JoinColumn()
  portfolio!: Portfolio; 
}