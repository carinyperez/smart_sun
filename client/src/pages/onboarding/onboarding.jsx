import react from 'react';
import { withRouter } from 'react-router-dom';
import Introduction from '../../components/introduction/introduction';

import Name from './Name';
import Email from './Email';
import Outdoors from './Outdoors';
import WakeUp from './WakeUp';
import Profession from './Profession';

const Onboarding = ({ history }) => {
    const handleClick = (evt) => {
    console.log("I clicked" + evt.target.name )
        //    history.push('/what-is-your-email');
    }
    return (
        <>
        <Name
        handleClick={handleClick}/>
        <Email
        handleClick={handleClick}/>
        <Outdoors
        handleClick={handleClick}/>
        <WakeUp
        handleClick={handleClick}/>
        <Profession
        handleClick={handleClick}/>
    </>
    )
}

export default withRouter(Onboarding);