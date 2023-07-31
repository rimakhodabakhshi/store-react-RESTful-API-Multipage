import React, {Component} from "react";

import style from "./Search.module.css"

class Search extends Component {

    constructor() {
        super();
        this.state = {
            text: ""
        }
    }


    changeHandeler = event => {
        this.setState({
            text: event.target.value,
        })
    }


    render() {
        return (
            <div className={style.container}>
                <p>search what you want</p> 
                <div>
                  <input placeholder="search..." type="text" value={this.state.text} onChange={this.changeHandeler}/>
                  <br/>
                  <br/>               
                  <span>{this.state.text}</span> 
                </div>
            </div>
        );
    }
}

export default Search;