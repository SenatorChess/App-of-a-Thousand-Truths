import React from 'react';
import './App.css';
import Pageone from './Pages/Pageone.js';

function Buttons() {

  return (
    <div>
    <button onClick={Pageone} className="button" style={{backgroundColor: "#008CBA"}}>
        I am button
      </button>
      <button className="button" style={{backgroundColor: "#f44336"}}>
        I am button
      </button>
      <button className="button" style={{backgroundColor: "#555555"}}>
        I am button
      </button>
      <button className="button" style={{backgroundColor: "#4CAF50"}}>
        I am button
      </button>
      </div>
  );
}

export default Buttons;