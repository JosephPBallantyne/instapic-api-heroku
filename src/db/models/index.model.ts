import { Sequelize } from 'sequelize';
import Users from './users.model';
import Images from './images.model';

console.info('Initializing sequelize...');

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const initModels = async (sequelizeInst: Sequelize) => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
  console.info('Initializing sequelize models...');
  Users.initModel(sequelizeInst);
  Images.initModel(sequelizeInst);
};

export const initAssociation = async () => {
  console.info('Initializing sequelize associations...');
  Users.initAssocation();
  Images.initAssocation();
};
