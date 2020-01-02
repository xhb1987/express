import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import loader from "./loader";
import serverlessHttp from "serverless-http";
// const startServer = async () => {
//   const app: Application = express();
//   await loader({ expressApp: app });
//   return app.listen(3000, () => console.log("express start at 3000"));
// };

// startServer();

const app: Application = express();
app.get("/", (req, res, next) => res.json("test test"));
app.get("/test", (req, res, next) => res.json("test"));

// const startServer = async (event: any, context: any) => {
//   console.log("start server");
//   await loader({ expressApp: app });
//   const result = serverlessHttp(app);
//   return result(event, context);
// };

// const server = serverlessHttp(app);
const handler = serverlessHttp(app);
module.exports.handler = async (event: any, context: any) => {
  await loader({ expressApp: app });

  const result = handler(event, context);
  return result;
};
