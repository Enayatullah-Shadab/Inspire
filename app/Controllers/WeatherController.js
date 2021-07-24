import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


export default class WeatherController {

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.log(" something was wrong " + error)
        }
    }
}