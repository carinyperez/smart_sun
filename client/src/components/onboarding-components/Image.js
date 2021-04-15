import react from 'react';
import drink_water from '../../assets/drink_water.png';
import sunhat from '../../assets/sunhat.png';

export default function Image(props){
    return(
    <img src={props.water? drink_water : sunhat} alt={props.water? 'woman drinking from a bottle of water':'woman in hat with sun shining on her'}/>
    )
}
