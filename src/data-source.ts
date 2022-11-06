import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entity/*.entity{.ts,.js}'],
  migrations: [__dirname + './src/migration/*{.ts,.js}'],
  migrationsTableName: 'migration',
  subscribers: [],
});

appDataSource
  .initialize()
  .then(() => {
    console.log('Database connection established');
  })
  .catch((error) => {
    console.error('Database connection failed', error);
  });

appDataSource.runMigrations();
