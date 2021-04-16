import react from 'react'
import {NavLink} from 'react-router-dom'
import './sidebar.styles.scss'

export default function SideBar(props){
    return(

    <div className='dash-text'>
                <h1>Smart Sun</h1>
            <NavLink to="/dashboard" className="dash-link" activeClassName="dash-link_active">Dashboard</NavLink>
            <NavLink to="/skinAnalyzer" className="dash-link" activeClassName="dash-link_active">Skin Analyzer</NavLink>
            <NavLink to="/food" className="dash-link" activeClassName="dash-link_active">Food</NavLink>
            <NavLink to="/exercise" className="dash-link" activeClassName="dash-link_active">Exercise Routine</NavLink>
    </div>
            )
}