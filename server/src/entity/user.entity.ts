import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { DeviceEntity } from "./device.entity";
import { SharedProp } from './SharedProp.helper'
 
@Entity({name: "user"}) 
export class UserEntity extends SharedProp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(()=>DeviceEntity, (device:DeviceEntity) => device.users,{
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({name: 'userId', referencedColumnName:"id"})
  device: Array<DeviceEntity>;
}
