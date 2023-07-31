import React, {Component} from "react";
 
import styles from "./Cards.module.css";
import Card from "./Card";

import clock1 from "../images/1.png"
import clock2 from "../images/2.png"
import clock3 from "../images/3.png"
import clock4 from "../images/4.png"

class Cards extends Component {
    constructor(){
        super()
        this.state = {
            clockData: [
                {id:1, image:clock1, name:"Daniel Klein", cost:"500 $"},
                {id:2, image:clock2, name:"HUBLOT", cost:"800 $"},
                {id:3, image:clock3, name:"HUBLOT", cost:"650 $"},
                {id:4, image:clock4, name:"PATEK PHILIPPE", cost:"740 $"}
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                 {this.state.clockData.map(clock => 
                 <Card 
                 key={clock.id} 
                 image={clock.image} 
                 name={clock.name} 
                 cost={clock.cost}
                 id={clock.id}
                 />)}
            </div>
        );
    }
}


export default Cards;  