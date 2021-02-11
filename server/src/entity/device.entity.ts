import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm'
import { SharedProp } from './SharedProp.helper'
import {UserEntity} from './user.entity'
import {WaterEntity} from './water.entity'

@Entity({name: "device"})
export class DeviceEntity extends SharedProp{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String

    @ManyToOne(()=>UserEntity, (users:UserEntity)=> users.device)
    users:UserEntity

    @OneToMany(()=>WaterEntity, (water: WaterEntity) => water.device, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    @JoinColumn({name: 'waterId', referencedColumnName:"id"})
    water: Array<WaterEntity>;
}