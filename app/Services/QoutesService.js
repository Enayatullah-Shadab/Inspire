import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class QoutesService {

    async getQoute() {
        try {
            const res = await sandbox.get('qoutes/')
            console.log(res.data)
            ProxyState.Qoute = res.data.map(q => new Qoute(q))
            console.log("call form quote service")

        } catch (error) {
            console.error(error)
        }
    }
}
export const qoutesService = new QoutesService()