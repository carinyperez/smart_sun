import react from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';

export default function Email(props){
    function handleClick(evt){
        evt.preventDefault()
        props.handleNameClick()
    }
    return(
        <OnboardingPage
            question="Finally, what's your profession?"
            handleButtonClick={handleClick}
            progress="5"
            water
            >
                <input placeholder='Enter your profession' />
            </OnboardingPage>
    )
}