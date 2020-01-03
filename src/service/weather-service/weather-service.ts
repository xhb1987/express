import { Service } from "typedi";
import request, { Response } from "request";
import { CityInfo, WeatherInfo } from "./types";

@Service()
class WeatherService {
  async getWeatherInfo(woeid: number): Promise<WeatherInfo> {
    return new Promise((resolve, reject) => {
      const requestUrl = `https://www.metaweather.com/api/location/${woeid}`;
      request.get(requestUrl, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        }

        const data = res.toJSON().body as WeatherInfo;
        resolve(data);
      });
    });
  }

  async getCityInfo(query: string): Promise<CityInfo> {
    return new Promise((resolve, reject) => {
      const requestUrl = `https://www.metaweather.com/api/location/search/?query=${query}`;
      request.get(requestUrl, (err: Error, res: Response) => {
        if (err) {
          reject(err);
        }

        const data = res.toJSON().body as CityInfo;
        resolve(data);
      });
    });
  }
}

export default WeatherService;
