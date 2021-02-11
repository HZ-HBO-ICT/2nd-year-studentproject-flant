import {Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn} from 'typeorm'
import {DeviceEntity} from "./device.entity"
import { SharedProp } from './SharedProp.helper'
 
@Entity({name: "water"})
export class WaterEntity extends SharedProp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  water: number;
  
  @Column()
  deviceId:number 

  @ManyToOne(()=>DeviceEntity , (device: DeviceEntity)=> device.water)
  @JoinColumn({ name: 'deviceId' })
  device: DeviceEntity;

} 


