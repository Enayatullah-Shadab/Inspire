import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class QuotesService {

    async getQuote() {
        try {
            const res = await sandbox.get('quotes/')
            console.log(res.data)
            document.getElementById('content').innerHTML = res.data.content
            document.getElementById('autor').innerHTML = res.data.author
            console.log("call form quote service")
        } catch (error) {
            console.log(error)
        }
    }
}
export const quotesService = new QuotesService()