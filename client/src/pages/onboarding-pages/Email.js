import react from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';

export default function Email(props){
    function handleClick(evt){
        evt.preventDefault()
        props.handleNameClick()
    }
    return(
        <OnboardingPage
            question="Email"
            handleButtonClick={handleClick}
            progress="2"
            >
                <input placeholder='Enter your email' />
            </OnboardingPage>
    )
}