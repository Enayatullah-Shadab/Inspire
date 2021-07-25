import { ProxyState } from "../AppState.js"
import { qoutesService } from "../Services/QoutesService.js"


export default class QoutesController {

    constructor() {
        ProxyState.on('quote', _drawQuoute())
        this.getQoute()
    }
    async getQoute() {
        try {
            await qoutesService.getQoute()
        } catch (error) {
            console.log("error from qoute controller " + error)
        }
    }
}