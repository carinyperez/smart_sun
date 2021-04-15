import AnalogClock from 'analog-clock-react';

let options = {
    width: "100px",
    border: false,
    borderColor: "#2e2e2e",
    baseColor: "#009CDF",
    centerColor: "#459cff",
    centerBorderColor: "#fff",
    handColors: {
        second: "#d81c7a",
        minute: "#fff",
        hour: "#fff"
    }
};
const Clock = () => {
    return (
        <AnalogClock {...options} />
    )
}

export default Clock;


