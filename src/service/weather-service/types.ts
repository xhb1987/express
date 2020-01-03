export interface CityInfo {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

export interface Weather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: Date;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface WeatherInfo extends CityInfo {
  consolidated_weather: Weather[];
  timezone: string;
  timezone_name: string;
}
