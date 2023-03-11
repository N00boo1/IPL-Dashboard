import { React } from 'react';
import { Link } from 'react-router-dom';
import './TeamTile.scss';
import mi_logo from './teams_logos/MI.png'
import csk_logo from './teams_logos/CSK.png';
import rps_logo from './teams_logos/RPS.png';
import deccan_logo from './teams_logos/Deccan.png';
import kxip_logo from './teams_logos/KXIP.png';
import dc_logo from './teams_logos/DC.png';
import ktk_logo from './teams_logos/KTK.png';
import gl_logo from './teams_logos/GL.png';
import rcb_logo from './teams_logos/RCB.png';
import kkr_logo from './teams_logos/KKR.png';
import rr_logo from './teams_logos/RR.png';
import srh_logo from './teams_logos/SRH.png';
import pwg_logo from './teams_logos/PWG.png';


export const TeamTile = ({teamName}) => {

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
    const image_src=team_logos.get(teamName);

    return (
        <div className="TeamTile">
            <h1>
                <Link to={`/teams/${teamName}`}>
                    {teamName}
                </Link>
            </h1>
            <img src={image_src} alt="Team Logos" class="image_container" /> 
        </div>
    )
}