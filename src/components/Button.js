import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: this.props.value,
        }
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer(e) {
        e.target.classList.add('d-none');
        var id = `robot${this.props.num}task${this.props.description}`;
        var elem = document.getElementById(id)
        elem.style.backgroundColor = "yellow";
        elem.style.fontWeight = "bold";
        elem.style.borderLeft = "4px solid blue";
        this.timer = setInterval(() => {
            if (this.state.time === 0) {
                clearInterval(this.timer);
                elem.style.backgroundColor = "#56f58e";
                elem.style.borderLeft = "4px solid gold";
                elem.innerHTML = this.props.description.split("task")[1] + " - Complete!";
            } else {
                this.setState({
                    time: this.state.time - 1
                })
            }
        }, 1000);
    }

    render() {
        return (

            <button key={this.props.index} value={this.props.value} id={`robot${this.props.num}task${this.props.description}`} className="list-group-item" style={{borderLeft: "4px solid green", textAlign: "left"}}>
                {this.props.description.split("task")[1]} - ({this.state.time}) seconds
                <button className="ml-1 btn btn-sm" onClick={this.startTimer} style={{ backgroundColor: "#b545de", color: "white" }}>Start!</button></button>

        )
    }
}


