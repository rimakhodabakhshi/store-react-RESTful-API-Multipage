import React, {Component} from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }
    
    downHandeler = () => {
        if (this.state.counter >= 1) {
            this.setState(prevState => ({
                counter:prevState.counter - 1,
            }))
        }
       
    }

    upHandeler = () => {
        this.setState(prevState => ({
            counter:prevState.counter + 1,
        }))
    }

    render() {
        const {image, name, cost, id}=this.props;
        const {counter} = this.state;

        return (
            <div className={styles.container}>
                 <img src={image} alt="clock"/>
                 <h3> 
                     <Link to={`/Products/${id}`}>{name}</Link> 
                 </h3>
                 <p>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $` : " "}</p>

                 <div className={styles.counter}>
                    <img className={!counter ? styles.deactive : "" } src={down} alt="arrow" onClick={this.downHandeler}/>
                    <span>{counter}</span>
                    <img src={up} alt="arrow" onClick={this.upHandeler}/>
                 </div>
            </div>
        );
    };
}


export default Card;