import react from 'react';
import Webcam from "react-webcam"
import SideBar from '../../components/sidebar/sidebar';
import './skinAnalyzer.styles.scss'
import skinChart from '../../assets/skinAnalyzed.png';

export default function skinAnalyzer() {
    return (<div className="skin">
        <SideBar />
        <div>
            <div className="video-container">
                <Webcam
            mirrored="true" />
            <div className="overlay"/>
            </div>
            
            <img src={skinChart} alt="qualities of skin" />
        </div>
    </div>
    )
}