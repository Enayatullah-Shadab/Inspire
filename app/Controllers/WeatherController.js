import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather() {

    const weather = ProxyState.weather
    let template = ''
    weather.forEach(w => template += w.Template)
    // document.getElementById('weather').innerText = template
}
export default class WeatherController {

    constructor() {
        ProxyState.on('weather', _drawWeather());
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.log(" something went wrong with get weather" + error)
        }
    }
}