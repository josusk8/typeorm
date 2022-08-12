import { DataSource } from "typeorm";
import { User } from "./entities/User";
import{Task} from "./entities/Task"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "pruebajunior",
  synchronize: true,
  logging: true,
  entities: [User, Task],
  subscribers: [],
  migrations: [],
});
