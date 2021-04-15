import react from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';

export default function Name(props){
    function handleClick(evt){
        evt.preventDefault()
        props.handleNameClick()
    }
    return(
        <OnboardingPage
            question="My name is..."
            handleButtonClick={handleClick}
            water
            progress="1">
                <input defaultValue='Blessing' />
            </OnboardingPage>
    )
}