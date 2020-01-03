import { JsonController, Get, Param } from "routing-controllers";
import { Inject } from "typedi";
import WeatherService from "../../service/weather-service/weather-service";
import { CityInfo, WeatherInfo } from "../../service/weather-service/types";
import generateResponseMessage from "../../common/response-messge/response-message";
import { ResponseMessage } from "../../common/response-messge/types";

@JsonController("/weather")
class WeatherController {
  @Inject()
  weatherService!: WeatherService;

  @Get("/location/:city")
  async getCityInfo(
    @Param("city") name: string
  ): Promise<ResponseMessage<CityInfo>> {
    const cityInfo = await this.weatherService.getCityInfo(name);
    return generateResponseMessage<CityInfo>(cityInfo);
  }

  @Get("/weather/:woeid")
  async getWeatherInfo(
    @Param("woeid") woeid: number
  ): Promise<ResponseMessage<WeatherInfo>> {
    const weatherInfo = await this.weatherService.getWeatherInfo(woeid);
    return generateResponseMessage<WeatherInfo>(weatherInfo);
  }
}

export default WeatherController;
