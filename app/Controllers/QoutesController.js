import { ProxyState } from "../AppState.js"
import { qoutesService } from "../Services/QoutesService.js"


function _drawQuoute() {
    const quote = ProxyState.qoute
    let template = ''
    qoute.array.forEach(q => template += q.template)
    document.getElementById('quote').innerHTML = template
}
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