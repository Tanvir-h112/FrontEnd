import React from "react";
 
function ShowTasks({tasks}){
    return (
        <div>
            {tasks.length > 0 ? (
            <ul>
                {tasks.map((task)=> (
                    <li key={task.id}> {task.text} </li>
                ))}
            </ul>
            ) : (
                 <p>No task Found</p> 
            )}
        </div>
    )
}

export default ShowTasks;