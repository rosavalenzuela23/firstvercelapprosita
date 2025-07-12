import { Component } from 'react';
import { useState } from 'react'
import Task from '../entities/Task';
import TaskService from '../services/TaskService';
import TaskComponent from '../components/TaskComponent';

const taskService = /**@type {TaskService}*/ (TaskService.getInstance());

function App() {
  const [taskList, setTaskList] = useState(taskService.getAllTasks());

  function addTask(formData) {
    const task = new Task(
      formData.get("taskName"),
      formData.get("taskDescription")
    );

    taskService.createNewTask(task);
    setTaskList([...taskService.getAllTasks()])
  }

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row">
          <div className="col vh-75 overflow-y-scroll" style={{paddingBottom: '25vh'}}>
            {
              taskList.map(e => {
                return <TaskComponent task={e} key={e.id} ></TaskComponent>
              })
            }
          </div>
        </div>
        <div className='fixed-bottom row vh-25' style={{ backgroundColor: "red" }}>
          <form action={addTask} className='container-fluid d-flex flex-column align-items-center justify-content-center gap-3'>
            <input type="text" name='taskName' placeholder='Task name...' />
            <textarea name="taskDescription" id=""></textarea>
            <button className="btn btn-primary">Add task</button>
          </form>
        </div>
      </div>
    </>
  )
}

{/* <div className='container-fluid vh-100' style={{ 'backgroundColor': 'red' }}>
  <div className="container-fluid overflow-y-auto h-100">


  </div>
  <div className="fixed-bottom px-4 d-flex align-items-center justify-content-center"
    style={{ 'height': '6rem', 'backgroundColor': 'grey', }}>
    <button className='btn btn-primary rounded-5'
      style={{ 'height': '100px', 'aspectRatio': '1/1' }}>
      +
    </button>
  </div>
</div> */}

export default App
