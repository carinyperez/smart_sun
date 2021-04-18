import react from 'react';
import { Link } from 'react-router-dom';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="home">
            <div className="home__text">
                <h1>Welcome to Smart Sun</h1>
                <p>Let's start your journey to a healthy life now</p>
                <Link to="/onboarding"><button>Sign Up</button></Link>
                <p>Have an account? <Link to="/dashboard">Sign in</Link></p>
            </div>
        </div>
    )
}

export default HomePage;