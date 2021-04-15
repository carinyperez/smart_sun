import react from 'react';
import './onboarding.styles.scss';
import Form from './Form';
import Image from './Image';
import ProgressBar from './ProgressBar';

const OnboardingPage = (props) => {
    return (
        <div className="intro">
            <div className="intro-top">
                <Form
                    question={props.question}
                    handleClick={props.handleClick}
                    last={(props.progress === "5") ? true : false}
                >
                    {props.children}
                </Form>
                <ProgressBar
                    progress={props.progress} />
            </div>
            <div className="intro-bottom">
                <Image
                    water={props.water ? true : false}
                />
            </div>
        </div>
    )
}

export default OnboardingPage;