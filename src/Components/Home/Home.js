import React, { useEffect, useState } from 'react';
import MultiActionAreaCard from '../MultiActionAreaCard/MultiActionAreaCard';
import './Home.css';

const Home = () => {

    const [leagues, setLeagues] = useState([]);
    const firstNineLeagues = leagues.slice(0, 9)
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])

    return (
        <>
            <header className="header">
                <h1>Royal Leagues</h1>
            </header>
            <div className="body">
                <div className="leagueCard">
                    {
                        firstNineLeagues.map(data => <MultiActionAreaCard leagueData={data} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;