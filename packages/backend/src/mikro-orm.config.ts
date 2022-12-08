import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { get as getEnv } from 'env-var';

const config: Options = {
  type: 'postgresql',
  host: getEnv('PG_HOST').required().asString(),
  user: getEnv('PG_USER').required().asString(),
  password: getEnv('PG_PASSWORD').required().asString(),
  port: getEnv('PG_PORT').default(5432).asPortNumber(),
  dbName: getEnv('PG_DB_NAME').required().asString(),

  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,

  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
    disableForeignKeys: false,
  },
};

if (getEnv('PG_SSL').default('false').asBool()) {
  config.driverOptions = {
    connection: {
      ssl: { rejectUnauthorized: false },
    },
  };
}

export default config;
