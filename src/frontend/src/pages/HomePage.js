import { React, useEffect, useState } from 'react';
import './HomePage.scss';
import { TeamTile } from '../components/TeamTile';
import ipl_logo from '../components/teams_logos/ipl-logo.png'

export const HomePage = () => {

    const [teams, setTeams] = useState([]);
    useEffect(
        () => {
         const fetchAllTeams = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
            const data = await response.json();
            setTeams(data);
         };
         fetchAllTeams();
        }, []
    );

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL Dashboard</h1>
                <img src={ipl_logo} alt="Team Logos" className="image_con" />
            </div>
            <div className="team-grid">
                { teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />)}
            </div>
        </div>
        
    );
}