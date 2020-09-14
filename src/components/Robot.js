import React from "react";
import { robotTasks, robotTypes, imageLoc } from "../data/robotJSON.js"
import { Button } from "./Button"

export class RobotInfo {
    constructor(name, type, indexArray) {
        this.name = name;
        this.type = type;
        this.indexArray = indexArray;
    }
}

export class Robot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: {}
        }
        this.getCard = this.getCard.bind(this);
    }
    getCard(e) {
        var id = String(e.target.id);
        var value = parseInt(e.target.value);
        e.target.classList.add('d-none');
        var newState = this.state.progress;
        newState[id] = value;
        this.setState({ progress: newState });
    }
    renderState() {
        var dic = this.state.progress;
        var stateArray = Object.keys(dic).map(function (key) { return [key, dic[key]] });
        stateArray.sort(function (a, b) { return a[1] - b[1] || a[0] > b[0] });
        return stateArray
    }
    render() {
        var taskArray = [];
        var stateArray = this.renderState();
        console.log(stateArray);
        const randArray = this.props.randArray;
        for (var i = 0; i < randArray.length; i++) taskArray.push(robotTasks[randArray[i]]);
        const inProgress = stateArray.map(([description, eta], index) => <Button description={description} key={index} value={eta} index={index} num={this.props.num} />);
        const tasks = taskArray.map((obj, index) =>
            <button key={index} value={obj.eta} onClick={this.getCard} id={`robot${this.props.num}task${obj.description}`} className="list-group-item" style={{textAlign: "left", borderLeft:"4px solid green"}}>
                {obj.description} - ({obj.eta}) seconds</button>);
        return (
            <div className="col-md-auto">
                <div className="card ml-2 mr-2 mt-3 mb-3" id={`robot${this.props.num}`} style={{ borderRadius: "12px", border: "5px solid #b545de" }}>
                    <div className="card-header" style={{ backgroundColor: "#b545de" }}></div>
                    <h4 className="card-title ml-3 mt-2" style={{ textAlign: "left", marginBottom: "6px", fontSize: "13px" }}>{this.props.type}</h4>
                    <h4 className="card-title ml-3" style={{ textAlign: "left", fontWeight: "bold" }}>{this.props.name}</h4>
                    <p style={{ borderTop: "2px solid gold" }} className="mr-3 ml-3"></p>
                    <p style={{ textAlign: "center" }}><img className="card-img-top" src={imageLoc[this.props.type.toUpperCase()]} alt="robot-img" style={{ maxHeight: "8rem", maxWidth: "10rem" }} /></p>
                    <p style={{ borderTop: "2px solid gold" }} className="mr-3 ml-3"></p>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {inProgress}
                            {tasks}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}