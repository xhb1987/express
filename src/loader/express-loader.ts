import { Application, Request, Response } from "express";
import { useExpressServer } from "routing-controllers";
import { UserController } from "../controller";
import IsAuth from "../controller/middleware/is-auth";
import ErrorHandler from "../controller/middleware/error-handler";

export default async ({ app }: { app: Application }) => {
  app.get("/status", (req: Request, res: Response) => {
    res.status(200).end();
  });
  useExpressServer(app, {
    controllers: [UserController],
    authorizationChecker: IsAuth,
    middlewares: [ErrorHandler],
    defaultErrorHandler: false
  });

  //   app.use('/', controller());
  return app;
};
