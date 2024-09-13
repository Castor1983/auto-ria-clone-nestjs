import * as path from 'node:path';
import * as process from 'node:process';

import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import getter from './src/config/configuration';

dotenv.config({ path: './environments/local.env' });

const databaseConfig = getter().postgres;

export default new DataSource({
  type: 'postgres',
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.user,
  password: databaseConfig.password,
  database: databaseConfig.dbName,
  entities: [
    path.join(process.cwd(), 'src', 'database', 'entities', '*.entity.ts'),
  ],
  migrations: [
    path.join(process.cwd(), 'src', 'database', 'migrations', '*.ts'),
  ],
  synchronize: false,
});
