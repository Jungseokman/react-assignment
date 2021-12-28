import React from "react";



class Assignment extends React.Component {

    constructor() {
        super();

        this.state = {
            color: "red",
            colorNumber: 0,
            randomColorX: 0,
            randomColorY: 0,
            randomColorZ: 0, 
            imgNumber: 1,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                return {
                    color: this.ColorBox[this.state.colorNumber],
                    colorNumber: this.state.colorNumber < this.ColorBox.length - 1 ? this.state.colorNumber + 1 : 0,            
                    imgNumber: Math.ceil(Math.random() * 10),
                };
            });
        }, 3000);
        setInterval(() => {
            this.setState(() => {
                return {
                    randomColorX: Math.ceil(Math.random() * 255),
                    randomColorY: Math.ceil(Math.random() * 255),
                    randomColorZ: Math.ceil(Math.random() * 255),
                };
            });
        }, 1500);
    };


    render(){
        return (
            <div style={{width:"100%", display: "flex", flexDirection:"column", alignItems: "center", textAlign: "center", color:"#999"}}>
                <div style={{display: "flex", padding:50}}>
                    <div style={{marginRight: 200}}>
                        <div style={{width: 300, height: 300, backgroundColor: this.state.color, borderRadius:150}}></div>
                        <p>8가지색 순서대로 3초</p>
                    </div>
                    <div>
                        <div style={{width: 300, height: 300, backgroundColor: `rgb(${this.state.randomColorX}, ${this.state.randomColorY}, ${this.state.randomColorZ})`, borderRadius: 150}}></div>
                        <p>랜덤의 색 1.5초</p>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + `/img/${this.state.imgNumber}.jpeg`} style={{width:600, height:300}}/>
                    <p>10개사진 랜덤 3초</p>
                </div>
            </div>
        );
    };

    ColorBox = ["blue", "black", "yellow", "pink", "green", "gray", "gold", "red"];
};


export default Assignment;