import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();
const isProduction = process.env.DB_HOST !== 'localhost';

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['dist/**/entities/*.entities{.ts,.js}'],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  ssl: isProduction ? { rejectUnauthorized: true } : false,
});
