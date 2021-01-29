import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('Button has correct initial color', () => {
  render(<App/>);
  // find an element with a role of a button and text of 'Change to blue'
  const colorButton = screen.getByRole('button',{ name: 'Change to blue'});
  
  //expect the background color to red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});
  expect(colorButton.textContent).toBe('Change to blue');
  
});


test('Button turns blue when clicked', () => {

  render(<App/>);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  //fire a click event and check if the color and text has been changed
  fireEvent.click(screen.getByRole('button'));

  // check the background color to be blue

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  //text is Change to red

  expect(colorButton.textContent).toBe('Change to red');

});

test('initial conditions', () => {
  render(<App/>)
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button',{ name: 'Change to blue' });

  expect(colorButton).toBeEnabled();

  // check that the check box start out checked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})