import React, { useState } from 'react';
import OnboardingPage from '../../components/onboarding-components/OnboardingPage';
import { useHistory } from 'react-router-dom'
const Name = (props) => {
    let history = useHistory();
    const [name, setName] = useState('')
    const handleClick = async () => {
        await props.onButtonClick(name)
        history.push('/onboarding/email');
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <OnboardingPage
            question="My name is..."
            handleClick={handleClick}
            water
            progress="1">
            <input placeholder='Blessing' value={name} onChange={handleChange} />
        </OnboardingPage>
    )
}
export default Name;