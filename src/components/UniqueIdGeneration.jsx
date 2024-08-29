import React from "react";
import {v4 as uuidv4} from "uuid"
const todos = [
    {
        id: uuidv4(),
        airName: "Qatar Airways",
        airRoute: "Dhaka - Qatar"
    },
    {
        id: uuidv4(),
        airName: "Emirates Airways",
        airRoute: "Dhaka - Dubai"
    },
    {
        id: uuidv4(),
        airName: "Turkish Airways",
        airRoute: "Dhaka - Istambul"
    },
    {
        id: uuidv4(),
        "airName": "Sri Lankan Airways",
        "airRoute": "Dhaka - Colombo"
    }
]

const UniqueListGenerator =() => {
    return (
        <div>
            <h2>Unique List</h2>
            {todos.map((todo,index) => {

                return(
                    <div key = {todo.id}>
                        <h3>Unique ID:  {todo.id} </h3>
                        <h3> Air Name:  {todo.airName}</h3>
                        <h3> Air Route:  {todo.airRoute}</h3>

                    </div>
                    );
            })} 

                 
         </div>
    );
};

export default UniqueListGenerator;
