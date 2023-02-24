import { Entity, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import Model from './Model.entity';
import { User } from './User.entity';
import { Trade } from './Trade.entity';
// import { Min, IsInt } from 'class-validator';

@Entity('portfolio')
export class Portfolio extends Model {
  @Column({ default: 100000 })
  // @Min(0)
  // @IsInt()
  balance: number
  
  // A user can create many trades to go in their portfolio
  @OneToMany(() => Trade, (trade: Trade) => trade.portfolio)
  trades!: Array<Trade>;
  
  // A user can have only one portfolio
  @OneToOne(() => User, (user: User) => user.portfolio)
  @JoinColumn()
  user!: User;
}