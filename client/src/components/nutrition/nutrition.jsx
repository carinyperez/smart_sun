import React from 'react';
import Card from '../card/card';
import water from '../../assets/water.png';
import tips from '../../assets/tips.png';
import foods from '../../assets/foods.png';
import './nutrition.styles.scss';
import SideBar from '../sidebar/sidebar';


const Nutrition = () => {
    return (
        <div className='nutrition'>
            <SideBar />
            <div className='dash-images'>
                <Card
                    name="water"
                    heading="Water Intake"
                >
                    <img src={water} alt="water-fill" />
                    <h4>Take a bottle of water</h4>
                    <p>50ml</p>
                </Card>
                <Card
                    name="meal"
                    heading="Today's Meal">
                    <img src={foods} alt="food circles" />
                    <p> Egg Yolk Mushrooms Seafood</p>
                </Card>
                <Card
                    name="tips"
                    heading="Daily Tips">
                    <img src={tips} alt="notifications" />
                </Card>
            </div>
        </div>
    )
}
export default Nutrition;

