import style from '../css_modules/friend.module.css';

import React, {Component} from 'react';
import {characters} from "../utils/Constants";

class Friend extends Component {

    constructor(props) {
        super(props);
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
            <img onClick={()=>this.props.changeHero(this.props.item)} className={styles} src={characters[this.props.item].img} alt="friend"/>
        );
    }

}
export default Friend;
