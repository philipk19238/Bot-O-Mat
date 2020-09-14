import React from "react";
import { Child } from './Child'
import { Robot } from './Robot'

export class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { names: [] }
        this.addNames = this.addNames.bind(this);
    }
    addNames(newName) {
        this.setState({ names: [...this.state.names, newName] });
    }
    renderRobot() {
        var elem = []
        for (var j = 0; j < this.state.names.length; j++) {
            var robotInfo = this.state.names[j];
            elem.push(<Robot name={robotInfo.name} type={robotInfo.type} key={j} num={j} randArray={robotInfo.indexArray} />)
        }
        return elem;
    }
    render() {
        return (
            <div>
                <nav class="navbar d-flex justify-content-center" style={{ backgroundColor: "#b545de" }}>
                    <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "50px", display: "block", color: "white" }} className="m-2">Bot-O-Mat</h1>
                </nav>
                <Child addNames={this.addNames} />
                <div className="container-fluid col-sm-12 col-lg-9">
                    <div className="row d-flex justify-content-center mx-auto">
                        {this.renderRobot()}
                    </div>
                </div>
            </div>
        );
    }
}