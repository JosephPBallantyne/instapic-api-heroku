let config = {
  local: {
    username: '',
    database: '',
    password: '',
    host: '',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
};

if (process.env.NODE_ENV === 'local') {
  config = config.local;
} else if (process.env.NODE_ENV === 'production') {
  config = config.production;
} else {
  config = config.local;
}

console.log(
  `Running sequelize-cli on host: ${config.host}; db: ${config.database}`
);
module.exports = {
  ...config,
};
