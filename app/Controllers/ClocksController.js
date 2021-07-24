import { ProxyState } from "../AppState.js"
import { clocksService } from "../Services/ClocksService.js"


export default class ClocksController {

    async getClock() {
        try {
            await clocksService.getClock()
        } catch (error) {
            console.log(" something was wrong " + error)
        }
    }
}