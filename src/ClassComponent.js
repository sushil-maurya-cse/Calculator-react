import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
      }
      changeBrand = () => {
        this.setState({model: "Toyota"});
      }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} a {this.state.model} from {this.state.year}.
                    <button
                        type="button"
                        onClick={this.changeColor}
                    >Change color</button>
                     <button
                        type="button"
                        onClick={this.changeBrand}
                    >Change color</button>
                </p>
            </div>
        )
    }
}
