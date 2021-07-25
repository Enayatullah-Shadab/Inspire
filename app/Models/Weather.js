export default class Weather {

    constructor(data) {
        this.name = weather.name
        this.temp = weather.main[0].temp
        this.sunrise = sys.sunrise
        this.sunset = sys.sunset
    }
    get Template() {
        return `
    <div class="">
        ${this.name}
        ${this.temp}
        ${this.sunrise}
        ${this.sunset}
    </div> `
    }
}