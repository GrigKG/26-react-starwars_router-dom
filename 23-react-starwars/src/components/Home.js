import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {defaultHero, friends} from "../utils/Constants";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.myHero = this.props.match.params.hero;
        if(!friends.includes(this.myHero)){
            this.myHero=defaultHero;
        }
    }

    componentDidMount() {
        this.props.changeHero(this.myHero);
    }

    render() {
        return (
            <main className="clearfix">
                <Hero hero={this.myHero}/>
                <DreamTeam hero={this.myHero} changeHero={this.props.changeHero}/>
                <FarGalaxy/>
            </main>
        );
    }
};

export default Home;