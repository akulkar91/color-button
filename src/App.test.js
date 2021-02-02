import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelCaseWithSpaces } from './App';


test('Button has correct initial color', () => {
  render(<App/>);
  // find an element with a role of a button and text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole('button',{ name: 'Change to Midnight Blue'});
  
  //expect the background color to MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed'});
  expect(colorButton).toHaveTextContent('Change to Midnight Blue');
  
});


test('Button turns MidnightBlue when clicked', () => {

  render(<App/>);
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});

  //fire a click event and check if the color and text has been changed
  fireEvent.click(colorButton);

  // check the background color to be MidnightBlue

  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue'});

  //text is Change to mediumvioletred

  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');

});

test('initial conditions', () => {
  render(<App/>);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button',{ name: 'Change to Midnight Blue' });

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
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});
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

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
  expect(checkbox).not.toBeChecked();

  //flow 1 disable button--> button color gray --> enable button --> button bgColor back to red
  fireEvent.click(checkbox); // --> turns to checked
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor:'gray'});
  fireEvent.click(checkbox); // --> turns unchecked
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed'});

  //flow 2 click button to change bgColor to MidnightBlue --> disable button --> button turn gray
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:"MidnightBlue"});
  fireEvent.click(checkbox); //-->turns checked
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor:'gray'})

  //flow 3 enable button -->  button is MidnightBlue
  fireEvent.click(checkbox); //turns unchecked
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
});

// Testing functions 
describe('spacess before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});