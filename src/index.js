import React, { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import './index.css'

const names = [];

const Function = (props) => {

  const [newplayer, setNewPlayer] = useState('');
  const [players, setPlayer] = useState(props.names);

  function setChange(e) {
    setNewPlayer(e.target.value);
  }

  function addPlayer() {
    const newList = players.concat({ id: uuidv4(), name: newplayer });
    setPlayer(newList);
    setNewPlayer('');
  }

  function delPlayer(id) {
    const newlist = players.filter(item => item.id !== id);
    setPlayer(newlist);
  }

  return (
    <div className='outerbox'>
      <div className='header'>
        <h1>
          To-Do List
        </h1>
      </div>
      <div className='innerbox'>
        <div className='inputBox'>
          <input value={newplayer} type='text' onChange={setChange} placeholder='Enter your task' />
          <button  onClick={addPlayer}>+</button>
        </div>
        <div className='listItems'>
          <ul>
            {players.map((item) => {
              return (
              <li  key={item.id}>
                <button  onClick={() => delPlayer(item.id)}>X</button>
                {item.name}
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Function names={names} />,
  document.getElementById('root')
);
