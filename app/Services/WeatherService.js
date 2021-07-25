import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class WeatherService {

    async getWeather() {
        try {
            const res = await sandbox.get('Sha/todos')
            console.log(res.data)
            ProxyState.Weather = res.data.map(w => new Weather(w))
        } catch (error) {
            console.error('error form weather service ' + error);
        }
    }
}

export const weatherService = new WeatherService()