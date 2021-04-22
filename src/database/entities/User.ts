import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    length: 120,
  })
  email: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
