import React, { useState } from "react";

const TaskForm = (props) => {
    const [newTask, setNewTask] = useState("");
    

    //FORM (Submit)
    const createNewTask = (e) => {
        e.preventDefault();
        //SALE A PROPS
        props.onNewTask(newTask);
        setNewTask("");
        
    };

    //INPUTS
    //NewTask
    const handleNewTask = (e) => {
        setNewTask(e.target.value);
    }
    
    return (
        <form onSubmit={ createNewTask }>
            <h1>To Do List</h1>
            <label htmlFor="newTask">New Task:</label>
            <input
            type="text"
            id="newTask"
            name="newTask"
            value={newTask}
            onChange={handleNewTask}
            />
            <input type="submit" value="Add" />
        </form>
    );
};
    
export default TaskForm;