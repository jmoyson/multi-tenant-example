import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyId: string;

  @Column()
  name: string;

  @Column()
  breed: string;
}
