import react from 'react';
import './introduction.styles.scss';
import drink_water from '../../assets/drink_water.png';

const Introduction = () => {
    return (
        <div className='intro'>
            <div className='intro-top'>
                <h2>My name is ...</h2>
                <input placeholder='Blessing'></input>
            </div>
            <div className='intro-bottom'>
                <img src={drink_water} alt='drink-water'></img>
            </div>

        </div>
    )
}
export default Introduction;