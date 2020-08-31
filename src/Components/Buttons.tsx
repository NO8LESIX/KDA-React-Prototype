//For tutorial use only
//always remember to import react as your first statement
import React from "react";

//state and props are declared above the export function

interface ButtonsProps {
  //props go in here
}
interface ButtonsState {
  //state parameters go here
}

//follow this convention when declaring new component exports,
//always React.Components<PropsInterface, StateInterface>
export class Buttons extends React.Component<ButtonsProps, ButtonsState> {
  // constants and function calls are usually declared here

  //render function returns a single element I usually wrap them as a fragment (<> </>) and not a  <div></div>
  render() {
    //you should remeber to put your semicolon at the end of the return statement, but it will compile without it
    return (
      <>
        <button>Click me</button>
      </>
    );
  }
}
