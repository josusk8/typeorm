import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Task } from "./Task";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true , nullable: false})
  username: string;

  @Column({nullable: false})
  password: string;

  @OneToMany(() => Task, (task) => task.user, {
    cascade: true,
  })
  public tasks: Task[];
}
