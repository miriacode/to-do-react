import React from "react";

const TaskDisplay = (props) => {

    return (
        <ul>
            {props.tasks.map((el) => <li>{el}</li>)}
        </ul>
    );
};
    
export default TaskDisplay;


        