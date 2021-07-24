import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class ClocksService {
    async getClock() {
        const res = await sandbox.get('Sha/todos')
        console.log(res.data)
        ProxyState.Clock = res.data.map(c => new Clock(c))
    }

}
export const clocksService = new ClocksService()