import { Application, Request, Response } from "express";
import { useExpressServer } from "routing-controllers";
import { WeatherController } from "../controller";
import IsAuth from "../controller/middleware/is-auth";
import ErrorHandler from "../controller/middleware/error-handler";
import currentUser from "../controller/middleware/current-user";

export default async ({ app }: { app: Application }) => {
  require("dotenv").config();
  app.get("/status", (req: Request, res: Response) => {
    res.status(200).end();
  });
  useExpressServer(app, {
    // controllers: [UserController, WeatherController],
    controllers: [ WeatherController],
    authorizationChecker: IsAuth,
    middlewares: [ErrorHandler],
    currentUserChecker: currentUser,
    defaultErrorHandler: false
  });

  //   app.use('/', controller());
  return app;
};
