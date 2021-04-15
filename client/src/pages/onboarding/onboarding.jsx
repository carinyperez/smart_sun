import react from 'react';
import { withRouter } from 'react-router-dom';
import Introduction from '../../components/introduction/introduction';
import './onboarding.styles.scss';

const Onboarding = ({ history }) => {
    const handleClick = () => {
        history.push('/what-is-your-email');
    }
    return (
        <div className='onboarding'>
            <h1>Onboarding</h1>
            <Introduction />
        </div>
    )
}

export default withRouter(Onboarding);