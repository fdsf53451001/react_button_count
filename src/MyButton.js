import React from 'react'

export default class MyButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0,last_count:0,cps:0,word:'Cgu'};
        this.onButtonClickListener = this.onButtonClickListener.bind(this);
        this.tick = this.tick.bind(this);
    }
    componentDidMount(){
        this.timerID = setInterval(this.tick,1000);}
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    onButtonClickListener(event){
        this.setState({count:this.state.count+1,word:this.state.word+'被點了'});
    }

    tick(){
        this.setState({cps:this.state.count-this.state.last_count,last_count:this.state.count});
    }

    render(){
        return (
          [
            <button onClick={this.onButtonClickListener}>{this.state.word}</button>,
            <h3>CGU被點了{this.state.count}次</h3>,
            <h3>手速 : {this.state.cps} (CPS)</h3>
          ]
        );
    }
}
