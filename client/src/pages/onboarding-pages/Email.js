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
            <input placeholder='Enter your email' type="email" />
            <h2>Create a password</h2>
            <input placeholder="Password" type="password"/>
        </OnboardingPage>
    )
}

export default Email;