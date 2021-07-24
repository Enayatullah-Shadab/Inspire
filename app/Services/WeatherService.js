import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class WeatherService {
    async getWeather() {
        const res = await sandbox.get('Sha/todos')
        console.log(res.data)
        ProxyState.Weather = res.data.map(w => new Weather(w))
    }

}

export const weatherService = new WeatherService()