import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";

const Home = props => {
    const myHero = props.match.params.hero||'luke'
    return (
        <main className="clearfix">
            <Hero hero={myHero}/>
            <DreamTeam hero={myHero} changeHero={props.changeHero}/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;