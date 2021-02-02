import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
export function replaceCamelCaseWithSpaces(text) {
 return text.replace(/\B([A-Z])\B/g, ' $1');
}
function App() {
  const [color, setColor] = useState('MediumVioletRed');
  const [isChecked, setIsChecked] = useState(false);
  const buttonColorText = color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div>
      <button
        style={isChecked ? {backgroundColor: 'gray'}: {backgroundColor: color}}
        onClick={ () => setColor(buttonColorText) }
        disabled={isChecked}
      >
        Change to {replaceCamelCaseWithSpaces(buttonColorText)}
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
