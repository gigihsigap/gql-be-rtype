import * as fs from 'fs';
import * as dotenv from 'dotenv';
import YAML from 'yaml';

type ApolloConfig = {
  key: string;
  graph_ref: string;
  federation: string;
};

type CacheConfig = {
  is_cluster: boolean;
  host: string;
  port: number;
  namespace: string;
};

type Config = {
  apollo: ApolloConfig;
  server: {
    port: number;
  };
  introspection: boolean;
  cache: CacheConfig;
};

dotenv.config();

let _config: Config;

const loadConfig = (): Config => {
  const env = process.env.GQL_ENV ?? 'local';
  const name = `./apps/user/config/config-${env}.yml`;
  console.info(`Reading from file: ${name}`);
  const file = fs.readFileSync(name, 'utf-8');
  return YAML.parse(file);
};

export const initConfig = async () => {
  _config = loadConfig();
};

export const config = () => _config;
