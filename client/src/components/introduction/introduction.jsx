import react from 'react';
import './introduction.styles.scss';
import Image from '../onboarding-components/Image';
import Form from '../onboarding-components/Form'
import OnboardingPage from '../onboarding-components/OnboardingPage'
import onboarding from '../../pages/onboarding-pages/onboarding';

const Introduction = () => {
    function handleClick(evt) {
        evt.preventDefault()
        console.log('button was clicked')
    }
    return (
        <>
            <OnboardingPage
            question="My name is..."
            handleButtonClick={handleClick}
            water
            progress="5">
                <input placeholder='Blessing' />
            </OnboardingPage>
            <div className='intro'>
                <div className='intro-top'>
                    <Form
                        question="My name is..."
                        handleClick={handleClick}
                    >
                        <input placeholder='Blessing' />
                    </Form>
                </div>
                <div className='intro-bottom'>
                    <Image
                        water
                    />
                </div>

            </div>
        </>
    )
}
export default Introduction;