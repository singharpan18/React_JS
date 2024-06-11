import React from "react";
//part 1: create class component
//part 2: pass props
//part 3: create state variable
//part 4: update state variable
//part 5: lifecycle of class based component
//part 6: complex lifecycle of class based component
//part 7: API call inside class based component
export class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log( this.props.name+"child constructor is called...");
        this.state = {
            count: 0,
            count1: 1, 
            userInfo: {
                name: "dummy",
                location: "dummy",
            }
        };
    }

    async componentDidMount(){
        console.log(this.props.name+"child componentDidMount is called...");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate(){
        console.log("child componentDidUpdate is called...");
    }

    componentWillUnmount(){
        console.log("child componentWillUnmount is called...");
    }

    render(){
        //const {name, location} = this.props;
        const {count, count1} = this.state;
        const {name, location} = this.state.userInfo;

        console.log(this.props.name+"child render is called...");

        return(
            <div className="user-card">
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count+1,
                            count1: this.state.count1+1,
                        });
                    }}
                >Increase Count</button>
                <h1>count: {count}</h1>
                <h2>count1: {count1}</h2>
                <h2>name: {name}</h2>
                <h3>location: {location}</h3>
                <h4>contact: {this.props.contact}</h4>
            </div>
        );    
    }
}