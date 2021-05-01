let airVisualKey = process.env.REACT_APP_airVisualKey; 

class AirVisual {
    constructor(lat, lon) {
        this._lat = lat;
        this._lon = lon;
    }
    getInfo() {
        return fetch(`https://api.airvisual.com/v2/nearest_city?lat=${this._lat}&lon=${this._lon}&key=${airVisualKey}`).then((res) => res.ok ? res.json() : Promise.reject("Error!" + res.status + res.statusText))
    }
}
export default AirVisual; 