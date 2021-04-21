import { airVisualKey } from './key.json';
import { weather_api_key } from './key.json';

class AirVisual {
    constructor(lat, lon) {
        this._lat = lat;
        this._lon = lon;
    }
    getInfo() {
        return fetch(`http://api.airvisual.com/v2/nearest_city?lat=${this._lat}&lon=${this._lon}&key=${airVisualKey}`)
            // return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this._lat}&lon=${this._lon}&appid=${weather_api_key}`)
            .then((res) => res.ok ? res.json() : Promise.reject("Error!" + res.status + res.statusText))
    }
}

export default AirVisual