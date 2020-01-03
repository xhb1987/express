import ExpressLoader from "./express-loader";
import { Application } from "express";
import bodyParser from "body-parser";
import LoggerLoader from "./logger-loader";
import MongoLoader from "./mongo-loader";

export default async ({ expressApp }: { expressApp: Application }) => {
  console.log('loading!!!!')
  expressApp.use(bodyParser.json());
  await MongoLoader();
  await LoggerLoader({ app: expressApp });
  await ExpressLoader({ app: expressApp });
};
