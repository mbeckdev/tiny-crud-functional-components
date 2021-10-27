import React, { useState } from 'react';
// import {useEffect} from 'react';
import './App.css';
import uniqid from 'uniqid';

function App() {
  const [tasks, setTasks] = useState([
    {
      text: 'first',
      id: uniqid(),
      isEditing: false,
    },
    {
      text: 'second',
      id: uniqid(),
      isEditing: false,
    },
    {
      text: 'shrek',
      id: uniqid(),
      isEditing: false,
    },
  ]);

  // useEffect(() => {
  //   console.log('hey - tasks changed');
  // }, [tasks]);

  // useEffect(() => {
  //   console.log('useEffect for any of the states happened');
  // });

  const handleClick1 = () => {
    let newTasks = [
      ...tasks,
      {
        text: 'blah',
        id: uniqid(),
        isEditing: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleAddNewTask = () => {
    // Add a new task to the list
    // Open the list in edit mode to start typing
    //  make sure it's focused^ <- this happens on the <input/>
    let newTasks = [
      ...tasks,
      {
        text: '',
        id: uniqid(),
        isEditing: true,
      },
    ];
    setTasks(newTasks);
  };

  const handleDeleteClick = (aTask) => {
    let newTasks = tasks.filter((item) => item.id !== aTask.id);
    setTasks(newTasks);
  };

  const handleEditClick = (id) => {
    // allow editing
    let theIndex = tasks.findIndex((item) => item.id === id);
    let newTasks = tasks;
    newTasks[theIndex].isEditing = true;

    // huh? this (prevTasks)=>[...newTasks] is better than setTasks(newTasks)
    // because setTasks(newTasks)  wasn't rerendering on my screen until later

    // setTasks(newTasks);
    setTasks(() => [...newTasks]);
    // setTasks((prevTasks) => [...prevTasks, '']);
  };

  function handleEditChange(e, thisTask) {
    let theIndex = tasks.findIndex((item) => item.id === thisTask.id);
    let newTasks = tasks;
    newTasks[theIndex].text = e.target.value;

    // setTasks(newTasks);
    setTasks(() => [...newTasks]);
  }

  const handleEditSubmit = (e, thisTask) => {
    // stop the page from refreshing when submitting the form
    e.preventDefault();

    //set isEditing to false now
    let theIndex = tasks.findIndex((item) => item.id === thisTask.id);
    let newTasks = tasks;
    newTasks[theIndex].isEditing = false;
    setTasks(() => [...newTasks]);
  };

  return (
    <div className="App">
      <header className="App-header">Tiny CRUD - Functional Components</header>
      <main>
        <p>List of tasks</p>
        <ul>
          {tasks.map((aTask) => (
            <li key={aTask.id}>
              {aTask.isEditing ? (
                <div>
                  <EditTemplate
                    aTask={aTask}
                    editChange={handleEditChange}
                    editSubmit={handleEditSubmit}
                  />
                </div>
              ) : (
                <div>
                  <ViewTemplate
                    aTask={aTask}
                    editHandler={(e) => handleEditClick(e, aTask)}
                    deleteHandler={() => handleDeleteClick(aTask)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
        <button className="not-list-button" onClick={handleClick1}>
          Add 'blah' to tasks
        </button>
        <button className="not-list-button" onClick={handleAddNewTask}>
          Add new Task
        </button>
      </main>
    </div>
  );
}

export default App;

const ViewTemplate = ({ aTask, editHandler, deleteHandler }) => {
  return (
    <div>
      <button
        onClick={() => {
          deleteHandler(aTask);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          editHandler(aTask.id);
        }}
      >
        edit
      </button>
      {aTask.text}
    </div>
  );
};

const EditTemplate = ({ aTask, editChange, editSubmit }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          editSubmit(e, aTask);
        }}
      >
        <input
          autoFocus
          value={aTask.text}
          type="text"
          id="taskEditInput"
          onChange={(e) => {
            editChange(e, aTask);
          }}
        />
      </form>
    </div>
  );
};
