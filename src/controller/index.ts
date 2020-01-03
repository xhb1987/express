import UserController from "./user/user-controller";
import WeatherController from "./weather/weather-controller";
import { useContainer } from "routing-controllers";
import Container from "typedi";

useContainer(Container);

export { UserController, WeatherController };
