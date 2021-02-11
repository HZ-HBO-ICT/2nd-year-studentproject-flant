import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import {SharedProp} from './SharedProp.helper'


@Entity({name: "token"})
export class TokenEntity{

  //TODO fix timestamps to use the helper instead of its own
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: number;

  @Column()
  token: string;

  @Column()
  lastTimestamp: number;

  @Column()
  hostName: string;

  @Column()
  createdTimestamp: number;


}