import React from 'react';
import {characters, friends} from "../utils/Constants";
import Friend from "./Friend";

const DreamTeam = props => {
    const frd = friends.filter(i => i !== props.hero);
    return (
        <section className="float-right w-50 row no-gutters border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {frd.map((item, index) => <Friend
                changeMyHero={props.changeMyHero}
                changeHero={props.changeHero}
                item={item} key={index}
                                              pos={index + 1}/>)}
        </section>
    );
};

export default DreamTeam;