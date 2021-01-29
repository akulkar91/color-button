import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');
  const buttonColorText = color === 'red' ? 'blue' : 'red'

  return (
    <div>
      <button
        style={{backgroundColor: color}}
        onClick={ () => setColor(buttonColorText) }
      >
        Change to {buttonColorText}
      </button>
      <input type="checkbox"/>
    </div>
  );
}

export default App;
