import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class WeatherService {

    async getWeather() {
        debugger;
        try {
            const res = await sandbox.get('weather/')
            console.log(res.data)
            // ProxyState.Weather = res.data.map(w => new Weather(w))
            document.getElementById('name').innerHTML = res.data.name
            document.getElementById('temp').innerHTML = res.data.main.temp
            document.getElementById('humidity').innerHTML = res.data.main.humidity

            console.log('call from weather service')
        } catch (error) {
            console.error('error form weather service ' + error);
        }
    }
}
export const weatherService = new WeatherService()
