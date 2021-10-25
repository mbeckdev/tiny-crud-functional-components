import React, { useState, useEffect } from 'react';
import './App.css';
import uniqid from 'uniqid';

function App() {
  const [tasks, setTasks] = useState('');
  const [tasks2, setTasks2] = useState('');
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
    console.log('hey');
  }, [tasks]);
  useEffect(() => {
    console.log('dur happened');
  }, [tasks2]);

  const handleClick1 = () => {
    setTasks(tasks.concat(' blah'));
  };
  const handleClick2 = () => {
    setTasks2(tasks2.concat(' dur'));
  };

  return (
    <div className="App">
      <header className="App-header">Tiny Crud - Functional Components</header>
      <main>
        <p>stuff goes here</p>
        <p>tasks = {tasks}</p>
        <p>tasks2 = {tasks2}</p>
        <button onClick={handleClick1}>Add 'blah' to tasks</button>
        <button onClick={handleClick2}>Add 'dur' to tasks2</button>
      </main>
    </div>
  );

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
}

export default App;
