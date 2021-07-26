export default class Weather {

    constructor(data) {
        this.name = weather.name
        this.temp = weather.main[0].temp
        this.humidity = weather.main[0].humidity
    }
    get Template() {
        return `
    <div class="">
        ${this.name}
        ${this.temp}+f
        ${this.humidity}
    </div> `
    }
}