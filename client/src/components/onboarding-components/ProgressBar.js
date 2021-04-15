import react from 'react';

export default function ProgressBar(props) {
    return (
        <div className="progress-background">
            <div className={`progress-bar progress-bar-${props.progress}`}/>
        </div>)

}