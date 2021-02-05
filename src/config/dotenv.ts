import * as dotenv from 'dotenv';

const Environment = ({ config }): void => {
   const ENV = process.env.NODE_ENV;
   const PATH = config.NODE_ENV_OPTIONS?.find((config) => config.environment === ENV)?.dotenv;

   try {
      dotenv.config({
         path: PATH || '.env',
      });
   } catch (e) {
      throw Error(config.ERROR);
   }
};

export default Environment;
