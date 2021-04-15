import react from 'react';
import { withRouter } from 'react-router-dom';
import './email.styles.scss';
import sun_hat from '../../assets/sun_hat.png';

const Email = ({ history }) => {
    const handleClick = () => {
        history.push('/how-often-do-you-go-outdoors');
    }
    return (
        <div className='email-intro'>
            <div className='email-intro-top'>
                <h2>Email</h2>
                <input placeholder='blessing@gmail.com'></input>
                <button onClick={handleClick}>Continue</button>
            </div>
            <div className='email-intro-bottom'>
                <img src={sun_hat} alt='sun-hat'></img>
            </div>
        </div>
    )
}
export default withRouter(Email);