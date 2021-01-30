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
        style={{backgroundColor: color}}
        onClick={ () => setColor(buttonColorText) }
        disabled={isChecked}
      >
        Change to {buttonColorText}
      </button>
      <input
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
