import { Component } from "react";
import { User } from "./User";
import { UserClass } from "./UserClass";

export class About extends Component{

    constructor(props){
        super(props);
        console.log("parent constructor is called...");
    }

    componentDidMount(){
        console.log("parent componentDidMount is called...");
    }

    render(){
        console.log("parent render is called...");
        return (
            <div className="about">
                <h1>About Us</h1>
                <h2>This is Food App</h2>
                <User 
                    name={"arpan function"} 
                    location={"kolkata"} 
                    contact={"9748771982"}
                />
                <UserClass
                    name={"first class"} 
                    location={"kolkata"} 
                    contact={"9748771982"}            
                />
                <UserClass
                    name={"second class"} 
                    location={"kolkata"} 
                    contact={"9748771982"}            
                />

            </div>
        );    
    };
}; 

/*const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <h2>This is Food App</h2>
            <User 
                name={"arpan function"} 
                location={"kolkata"} 
                contact={"9748771982"}
            />
            <UserClass
                name={"arpan class"} 
                location={"kolkata"} 
                contact={"9748771982"}            
            />
        </div>
    );
};*/

export default About;