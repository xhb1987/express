import ExpressLoader from "./express-loader";
import { Application } from "express";
import bodyParser from "body-parser";

export default async ({ expressApp }: { expressApp: Application }) => {
  console.log('loading!!!!')
  expressApp.use(bodyParser.json());
  await ExpressLoader({ app: expressApp });
};
