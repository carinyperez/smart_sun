import react from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';

export default function Outdoors(props){
    function handleClick(evt){
        evt.preventDefault()
        props.handleNameClick()
    }
    return(
        <OnboardingPage
            question="Do you go outside often?"
            handleButtonClick={handleClick}
            water
            progress="3">
                <div className="outdoors__inputs">
                <input type="radio" name="outdoors" value="yes" id="yes"/><label for="yes">YES</label>
                <input type="radio" name="outdoors" value="no" id="no"/><label for="no">NO</label>
                <input type="radio" name="outdoors" value="sometimes" id="sometimes"/><label for="sometimes">SOMETIMES</label>
                </div>
            </OnboardingPage>
    )
}