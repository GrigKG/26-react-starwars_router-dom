import style from '../css_modules/friend.module.css';

import React, {Component} from 'react';
import {characters, homePage} from "../utils/Constants";
import {Link} from "react-router-dom";

class Friend extends Component {

    changeHero = hero => {
        this.props.changeHero(hero);
    }

    render() {
        let styles = 'col-4 p-1 ';
        if (this.props.pos === 7) {
            styles += style.bottomLeft;
        }
        if (this.props.pos === 9) {
            styles += style.bottomRight;
        }
        return (
            <Link to={`/${homePage}/${characters[this.props.item].name}`}>
                <img onClick={()=>this.changeHero(this.props.item)} className={styles}
                     src={characters[this.props.item].img}
                     alt={characters[this.props.item].name}/>
            </Link>
        );
    }

}
export default Friend;
