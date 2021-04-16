import react from 'react';
export default function Card(props) {
    return (
        <div className={`dash-card dash-${props.name}`}>
            <h3>{props.heading}</h3>
            {props.children}
        </div>
    )
}