import { airVisualKey } from './key.json';
import { weather_api_key } from './key.json';

class AirVisual {
    constructor(lat, lon) {
        this._lat = lat;
        this._lon = lon;
    }
    async getInfo() {
        return fetch(`https://api.airvisual.com/v2/nearest_city?lat=${this._lat}&lon=${this._lon}&key=${airVisualKey}`, {
            mode: 'no-cors',
            header: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then((res) => res.ok ? res.json() : Promise.reject("Error!" + res.status + res.statusText)).catch((err) => {
            console.log(err)
        })
    }
}
export default AirVisual