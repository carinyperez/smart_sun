import { useState } from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';
import { useHistory } from 'react-router-dom';
const Email = (props) => {

    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = async () => {
        await props.onButtonClick(email, password)
        history.push('/onboarding/outdoors');
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
        console.log(email)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
        console.log(password)
    }
    return (
        <OnboardingPage
            question="Email"
            handleClick={handleClick}
            progress="2"
        >
            <input placeholder='Enter your email' type="email" value={email} onChange={handleEmailChange} />
            <h2>Create a password</h2>
            <input placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
        </OnboardingPage>
    )
}
export default Email;