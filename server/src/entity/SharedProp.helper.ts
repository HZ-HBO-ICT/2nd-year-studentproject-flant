import { UpdateDateColumn, CreateDateColumn } from 'typeorm';

export class SharedProp {
  @CreateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
    name: 'createdAt',
  })
  createdAt: Date;
  @UpdateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
    name: 'updatedAt',
  })
  updatedAt: Date;
}
