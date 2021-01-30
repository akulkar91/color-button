import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);
  const buttonColorText = color === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        style={isChecked ? {backgroundColor: 'gray'}: {backgroundColor: color}}
        onClick={ () => setColor(buttonColorText) }
        disabled={isChecked}
      >
        Change to {buttonColorText}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        checked={isChecked}
        aria-checked={isChecked}
        onChange={
          () => setIsChecked(!isChecked)
        }
      />
    </div>
  );
}

export default App;
