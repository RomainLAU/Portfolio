import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Project } from './entity/Project';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'tiger',
  database: 'Portfolio',
  synchronize: true,
  logging: false,
  entities: [Project],
  migrations: [],
  subscribers: [],
});
