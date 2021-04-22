import React from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';

export default function Profession(props) {
    function handleClick() {
        props.history.push('/onboarding/final');
    }
    return (
        <OnboardingPage
            question="Finally, what's your profession?"
            handleClick={handleClick}
            progress="5"
            water
        >
            <input placeholder='Profession' />
        </OnboardingPage>
    )
}