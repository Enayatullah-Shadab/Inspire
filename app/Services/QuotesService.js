import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class QuotesService {

    async getQuote() {
        try {
            const res = await sandbox.get('quotes/')
            console.log(res.data)
            // ProxyState.Quote = res.data.map(q => new Quote(q))
            console.log("call form quote service")
        } catch (error) {
            console.log(error)
        }
    }
}
export const quotesService = new QuotesService()