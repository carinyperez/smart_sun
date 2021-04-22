import React from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';

export default function WakeUp(props) {
    function handleClick() {
        props.history.push('/onboarding/profession');
    }
    return (
        <OnboardingPage
            question="When do you wake up generally?"
            handleClick={handleClick}
            progress="4"
        >
            <div className="wake-up__inputs">
                <input type="radio" name="wakeupTime" value="7am" id="7am" /><label for="7am">7am</label>
                <input type="radio" name="wakeupTime" value="8am" id="8am" /><label for="8am">8am</label>
                <input type="radio" name="wakeupTime" value="9am" id="9am" /><label for="9am">9am</label>
                <br />   <input placeholder='Other Time' />
            </div>
        </OnboardingPage>
    )
}