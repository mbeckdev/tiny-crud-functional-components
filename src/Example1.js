import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// import './styles.css';

const Profile = (props) => {
  const [profileState, setProfileState] = useState(props);
  // console.log('props from Profile = ', props);

  useEffect(() => {
    setProfileState(props);
  }, [props]);

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {profileState.name}
      </p>
      <p>
        <strong>Email: </strong>
        {profileState.email}
      </p>
    </div>
  );
};

//
//
//

const Example1 = () => {
  const [state, setState] = useState({
    name: 'Param',
    email: 'param@gmail.com',
  });
  // console.log('state from Example1 ', state);

  const handleChange = () => {
    setState({
      name: 'Vennila',
      email: 'vennila@gmail.com',
    });
  };

  return (
    <div className="App">
      {/* <Profile {...state} /> */}
      <Profile name={state.name} email={state.email} />
      <button onClick={handleChange}>Change Profile</button>
    </div>
  );
};

export default Example1;
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
