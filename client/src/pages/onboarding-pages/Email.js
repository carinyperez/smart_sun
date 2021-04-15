import react from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';

const Email = (props) => {
    function handleClick() {
        props.history.push('/onboarding/outdoors');
    }
    return (
        <OnboardingPage
            question="Email"
            handleClick={handleClick}
            progress="2"
        >
            <input placeholder='Enter your email' />
        </OnboardingPage>
    )
}

export default Email;