import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"


function _drawQuote() {

    const quote = ProxyState.quote
    let template = ''
    quote.forEach(q => template += q.Template)
    document.getElementById('quote').innerHTML = template
}
export default class QuotesController {

    constructor() {
        ProxyState.on('quote', _drawQuote())
        this.getQuote()
    }
    async getQuote() {

        try {
            await quotesService.getQuote()
        } catch (error) {
            console.log("error from qoute controller " + error)
        }
    }
}