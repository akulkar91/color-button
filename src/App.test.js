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
  fireEvent.click(colorButton);

  // check the background color to be blue

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  //text is Change to red

  expect(colorButton.textContent).toBe('Change to red');

});

test('initial conditions', () => {
  render(<App/>);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button',{ name: 'Change to blue' });

  expect(colorButton).toBeEnabled();

  // check that the check box start out checked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('button functionality based on checkbox', () => {
  //render the App component to test 
  render(<App/>);

  // have the elements ready
  
  // button element  
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  // checkbox element
  const checkbox = screen.getByRole('checkbox', { name: "Disable button"});

  //steps to check the functionality

  //1. click on checkbox
  fireEvent.click(checkbox);
  // checkbox should be enabled
  expect(checkbox).toBeChecked();
  
  // expect the button to be disabled
  expect(colorButton).toBeDisabled();

  // checking the conditions for other second actions
  
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test('Button gray when disabled', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  expect(checkbox).not.toBeChecked();

  //flow 1 disable button--> button color gray --> enable button --> button bgColor back to red
  fireEvent.click(checkbox); // --> turns to checked
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor:'gray'});
  fireEvent.click(checkbox); // --> turns unchecked
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});

  //flow 2 click button to change bgColor to blue --> disable button --> button turn gray
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:"blue"});
  fireEvent.click(checkbox); //-->turns checked
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor:'gray'})

  //flow 3 enable button -->  button is blue
  fireEvent.click(checkbox); //turns unchecked
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
})