import "reflect-metadata";
import express, { Application } from "express";
import loader from "./loader";
import serverlessHttp from "serverless-http";

const app: Application = express();

const handler = serverlessHttp(app);
module.exports.handler = async (event: any, context: any) => {
  await loader({ expressApp: app });

  const result = handler(event, context);
  return result;
};
