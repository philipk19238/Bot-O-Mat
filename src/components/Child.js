import React from "react";
import { Robot, RobotInfo } from "./Robot"
import { robotTasks, robotTypes, imageLoc } from "../data/robotJSON.js"

export class Child extends React.Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
    }
    sendData(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var type = document.getElementById("robot-select").value;
        if (!name || !type) {
            alert("Please give your robot a name and a type!");
            return;
        }
        var info = new RobotInfo(name, type, this.getRandom());
        this.props.addNames(info);
    }
    getRandom() {
        var indexArray = [];
        for (var i = 0; i < robotTasks.length; i++) indexArray.push(i);
        for (var i = 0; i < robotTasks.length; i++) {
            var randIndex = Math.floor(Math.random() * robotTasks.length);
            var tempVal = indexArray[i];
            indexArray[i] = indexArray[randIndex];
            indexArray[randIndex] = tempVal;
        }
        return indexArray.length > 4 ? indexArray.slice(6) : indexArray;
    }

    render() {
        const options = Object.keys(robotTypes[0]).map((key, index) => <option value={robotTypes[0][key]} key={`type${index}`}>{robotTypes[0][key]}</option>);
        return (
            <div className="container mt-5 mb-5 d-flex justify-content-center" style={{ border: "5px solid #b545de", borderRadius: "12px" }}>
                <form onSubmit={this.sendData} id="robot-form">
                    <div className="form-row mt-3">
                        <div className="form-group col-md-6">
                            <label htmlFor="name" style={{ fontWeight: "bold" }}>Robot Name</label>
                            <input type="text" placeholder="Enter Name" id="name" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="robot-select" style={{ fontWeight: "bold" }}>Robot Type</label>
                            <select form="robot-form" id="robot-select" className="form-control">
                                {options}
                            </select>
                        </div>
                    </div>
                    <p style={{ textAlign: "center" }}><button type="submit" className=" btn btn-primary mb-3 btn-block" style={{backgroundColor: "#b545de", color: "white", border: "none"}}>Submit</button></p>
                </form>
            </div>
        )
    }
}