import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';

import './TeamPage.scss';
import mi_logo from '../components/teams_logos/MI.png'
import csk_logo from '../components/teams_logos/CSK.png';
import rps_logo from '../components/teams_logos/RPS.png';
import deccan_logo from '../components/teams_logos/Deccan.png';
import kxip_logo from '../components/teams_logos/KXIP.png';
import dc_logo from '../components/teams_logos/DC.png';
import ktk_logo from '../components/teams_logos/KTK.png';
import gl_logo from '../components/teams_logos/GL.png';
import rcb_logo from '../components/teams_logos/RCB.png';
import kkr_logo from '../components/teams_logos/KKR.png';
import rr_logo from '../components/teams_logos/RR.png';
import srh_logo from '../components/teams_logos/SRH.png';
import pwg_logo from '../components/teams_logos/PWG.png';

export const TeamPage = () => {
    const team_logos=new Map([
        ['Chennai Super Kings',csk_logo],
        ['Rising Pune Supergiants',rps_logo],
        ['Deccan Chargers',deccan_logo],
        ['Kings XI Punjab',kxip_logo],
        ['Delhi Capitals',dc_logo],
        ['Kochi Tuskers Kerala',ktk_logo],
        ['Rising Pune Supergiant',rps_logo],
        ['Gujarat Lions',gl_logo],
        ['Royal Challengers Bangalore',rcb_logo],
        ['Kolkata Knight Riders',kkr_logo],
        ['Rajasthan Royals',rr_logo],
        ['Sunrisers Hyderabad',srh_logo],
        ['Pune Warriors',pwg_logo],
        ['Mumbai Indians',mi_logo]
    ])


    const [team, setTeam] = useState({matches: []});
    const { teamName } = useParams();
    useEffect(
        () => {
         const fetchTeam = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
            const data = await response.json();
            setTeam(data);

         };
         fetchTeam();
            


        }, [teamName]
    );



    if (!team || !team.teamName) {
        return <h1>Team not found</h1>
    }
    const image_src=team_logos.get(team.teamName);
    console.log(image_src);
    return (
        <div className="TeamPage">        
        <div className="team-name-section">
             <img src={image_src}  alt="Team Logo" />
             <h1 className="team-name">{team.teamName}</h1>
        </div>
        <div className="win-loss-section">
            Wins / Losses
            <PieChart
                data={[
                    { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a34d5d' },
                    { title: 'Wins', value: team.totalWins, color: '#4da375' },
                ]}
                />
        </div>
        <div className="match-detail-section">
            <h3>Latest Matches</h3>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
        </div>
        {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)}
        <div className="more-link">
        <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More</Link>
        </div>
        </div>
    );
}