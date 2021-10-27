import React, { useState, useEffect } from 'react';
import './App.css';
import uniqid from 'uniqid';
import Example1 from './Example1';

// const Profile = (props) => {
//   const [profileState, setProfileState] = useState(props);

//   useEffect(() => {
//     setProfileState(props);
//   }, [props]);

//   return (
//     <div>
//       <p>
//         <strong>Name: </strong>
//         {profileState.name}
//       </p>
//       <p>
//         <strong>Email: </strong>
//         {profileState.email}
//       </p>
//     </div>
//   );
// };

const SomeComponent = (props) => {
  const [localHeya, setLocalHeya] = useState(props);
  // console.log('props form SC = ', props);

  useEffect(() => {
    setLocalHeya(props);
  }, [props]);

  return (
    <div style={{ border: '1px solid red', backgroundColor: 'blue' }}>
      <div>lol {localHeya.ya} lol</div>
      <p>
        <button onClick={props.handleChange}>change heya to blarg</button>
      </p>
    </div>
  );
};

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

  const [task, setTask] = useState({
    text: '',
    id: uniqid(),
    isEditing: false,
  });

  // this.state = {
  //   task: {
  //     text: '',
  //     id: uniqid(),
  //     isEditing: false,
  //   },
  //   tasks: [],
  // };

  useEffect(() => {
    console.log('hey-tasks changed');
  }, [tasks]);

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

  const [heya, setHeya] = useState('heya-lol');
  const handleHeyaClick = () => {
    setHeya('blarg');
  };

  useEffect(() => {
    console.log('heya is now ', heya);
  }, [heya]);

  // creating a new task
  useEffect(() => {
    console.log('task = ', task);
  }, [task]);

  // const handleChangeTaskClick = () => {
  //   // setTask({ text: 'task text here', id: uniqid(), isEditing: false });
  //   let dur = {
  //     text: 'blahssss',
  //     id: uniqid(),
  //     isEditing: false,
  //   };
  //   setTasks([...tasks, dur]);
  // };

  console.log('tasks = ', tasks);

  const handleDeleteClick = (e, task) => {
    console.log('delete clicked');
    let newTasks = tasks.filter((item) => item.id !== task.id);
    setTasks(newTasks);
  };

  const handleEditClick = (id) => {
    console.log('edit clicked', id);
    // allow editing
    let theIndex = tasks.findIndex((item) => item.id === id);
    // let changedTask = tasks[theIndex];
    // console.log('this item is ', tasks[theIndex]);
    // changedTask.isEditing = true;
    let newTasks = tasks;
    newTasks[theIndex].isEditing = true;
    console.log('newTasks in edit looks like ', newTasks);

    // huh? this (prevTasks)=>[...newTasks] is better than setTasks(newTasks)
    // because setTasks(newTasks)  wasn't rerendering on my screen until later

    // setTasks(newTasks);
    setTasks((prevTasks) => [...newTasks]);
    // setTasks((prevTasks) => [...prevTasks, '']);
    console.log('setTasks just called, looks like ', tasks);
    // changedTask
    // console.log(theIndex);
  };

  return (
    <div className="App">
      <header className="App-header">Tiny Crud - Functional Components</header>
      <main>
        <p>List of tasks</p>
        {/* <p>tasks = {tasks}</p> */}
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {/* <button
              // onClick={() => {
              //   handleDeleteClick(e, task);
              // }}
              >
                Delete
              </button> */}

              {/* <button
                onClick={() => {
                  handleEditClick(task.id);
                }}
              >
                Edit
              </button> */}
              {/* {task.text} */}
              {task.isEditing ? (
                <div>
                  <input />
                  {/* <button
                    onClick={() => {
                      handleEditClick(task.id);
                    }}
                  >
                    edit
                  </button> */}
                  {/* <EditTemplate
                  task={task}
                  // handleEditChange={(e) => this.handleEditChange(e, task)}
                  // handleOnSubmitEdit={(e) => this.onSubmitEdit(e, task)}
                /> */}
                </div>
              ) : (
                <div>
                  <button
                  // onClick={() => {
                  //   handleDeleteClick(e, task);
                  // }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      handleEditClick(task.id);
                    }}
                  >
                    edit
                  </button>
                  {task.text}

                  {/* <ViewTemplate
                  task={task}
                  // editHandler={(e) => this.handleEdit(e, task)}
                  // deleteHandler={(e) => handleDeleteClick(e, task)}
                /> */}
                </div>
              )}
            </li>
          ))}
        </ul>
        <button onClick={handleClick1}>Add 'blah' to tasks</button>
        {/* <button onClick={handleChangeTaskClick}>Change new task click</button> */}
        {/* <button onClick={handleAddNewTaskClick}>Add new task now</button> */}
        <SomeComponent ya={heya} handleChange={handleHeyaClick} />
        <br />
        <Example1 />
      </main>
    </div>
  );
}

export default App;

function ViewTemplate({ task, editHandler, deleteHandler }) {
  return (
    <div>
      {task.text} <button onClick={(e) => editHandler(e, task)}>Edit</button>
      <button id={task.id} onClick={(e) => deleteHandler(e, task)}>
        Delete
      </button>
    </div>
  );
}

function EditTemplate(task) {
  return (
    <div>
      {/* <form onSubmit={(e) => handleOnSubmitEdit(e, task)}> */}
      {/* <label htmlFor="taskEditInput">Enter task</label> */}
      {/* <input
          onChange={(e) => handleEditChange(e, task)}
          value={task.text}
          type="text"
          id="taskEditInput"
        /> */}
      {/* </form> */}
    </div>
  );
}

// const [state, setState] = useState({
//   name: 'Param',
//   email: 'param@gmail.com',
// });

// const handleChange = () => {
//   setState({
//     name: 'Vennila',
//     email: 'vennila@gmail.com',
//   });
// };

// return (
//   <div className="App">
//     <Profile {...state} />
//     <button onClick={handleChange}>Change Profile</button>
//   </div>
// );

// /

// /

// /

// /

// /

// const [color, setColor] = useState('black');

// useEffect(() => {
//   const changeColorOnClick = () => {
//     if (color === 'black') {
//       setColor('red');
//     } else {
//       setColor('black');
//     }
//   };

//   document.addEventListener('click', changeColorOnClick);

//   return () => {
//     document.removeEventListener('click', changeColorOnClick);
//   };
// }, [color]);

// return (
//   <div>
//     <div
//       id="myDiv"
//       style={{
//         color: 'white',
//         width: '100px',
//         height: '100px',
//         position: 'absolute',
//         left: '50%',
//         top: '50%',
//         backgroundColor: color,
//       }}
//     >
//       This div can change color. Click on me!
//     </div>
//   </div>
// );
