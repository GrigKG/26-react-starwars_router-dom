import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {defaultHero, friends} from "../utils/Constants";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myHero: this.props.match.params.hero
        }
        if(!friends.includes(this.state.myHero)){
            this.state.myHero=defaultHero;
        }
    }

    componentDidMount() {
        this.props.changeHero(this.state.myHero);
    }

    changeMyHero = myHero => {
        this.setState({myHero})
    }
    render() {
        return (
            <main className="clearfix">
                <Hero hero={this.state.myHero}/>
                <DreamTeam hero={this.state.myHero} changeHero={this.props.changeHero} changeMyHero={this.changeMyHero}/>
                <FarGalaxy/>
            </main>
        );
    }
};

export default Home;