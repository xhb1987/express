import UserController from "./user-controller/user-controller";
import { useContainer } from "routing-controllers";
import Container from "typedi";

useContainer(Container);

export {
  UserController
};
