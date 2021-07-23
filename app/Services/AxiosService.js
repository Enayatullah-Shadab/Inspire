export const jeopardyApi = axios.create({
    baseURL: 'https://jservice.io/api/random',
    timeout: 1000
})

export const sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api',
    timeout: 10000
})
