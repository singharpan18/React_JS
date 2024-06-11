import { useState } from "react";

export const User = ({name, location, contact}) => {

    const[count] = useState(0);
    const[count1] = useState(1);

    return(
        <div className="user-card">
            <h1>count0: {count}</h1>
            <h1>count1: {count1}</h1>
            <h2>name: {name}</h2>
            <h3>location: {location}</h3>
            <h4>contact: {contact}</h4>
        </div>
    );
};