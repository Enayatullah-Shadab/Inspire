import { ProxyState } from "../AppState.js"
import { qoutesService } from "../Services/QoutesService.js"


export default class QoutesController {

    async getQoute() {
        try {
            await qoutesService.getQoute()
        } catch (error) {
            console.log(" something was wrong " + error)
        }
    }
}