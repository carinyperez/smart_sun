import react from 'react';
import Weather from '../../components/weather/weather';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './onboarding.styles.scss';

const Onboarding = ({ history }) => {
    return (
        <div>
            Onboarding
            <button onClick={() => history.push('/onboarding/name')}>Continue</button>
        </div>
    )
}

export default Onboarding;
