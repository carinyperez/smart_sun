import react from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';


const Name = (props) => {
    const handleClick = () => {
        props.history.push('/onboarding/email');
    }
    return (
        <OnboardingPage
            question="My name is..."
            handleClick={handleClick}
            water
            progress="1">
            <input defaultValue='Blessing' />
        </OnboardingPage>
    )
}

export default Name;