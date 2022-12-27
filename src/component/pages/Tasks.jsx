import React from 'react';
import {useState} from 'react';
import shortid from 'shortid'
import Layout from '../input-group/layout/Layout';
import CreateTask from '../tasks/CreateTask';
import ShowTasks from '../tasks/ShowTasks';


function Tasks(){
    const [tasks, setTasks] = useState([])
    // const [visibility, setVisibility] = useState('all')

const addNewTask = (text)=> {
   const task = {
    text, 
    isCompleted: false,
    createdAt: new Date(),
    id: shortid.generate()
   };
  setTasks([task, ...tasks])
}
    return(
        <Layout>
            <h1>hello,</h1>
            <CreateTask addNewTask={addNewTask} />
            <ShowTasks tasks={tasks} />
        </Layout>
        
    )
}

export default  Tasks;

// Create New Task
// -Display All Tasks
// -Filter Tasks By Complete Incomplete and All
// -Delete Tasks
// -Edit Tasks