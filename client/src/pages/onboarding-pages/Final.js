import react from 'react';
import './final.styles.scss'
import stats from '../../assets/calculated-needs.png'
export default function Final(props){
    
        function handleClick() {
            props.history.push('/dashboard');
        }
    
    return(
        <div className="onboarding__final">
            <h2>We see you,</h2>
            <h3>You're embarking on this journey to build more Energy</h3>
            <img src={stats} alt="needs for sunlight, mindfullness, fitness and outdoors"/>
            <button onClick={handleClick}>Let's get started</button>
        </div>
    )
}