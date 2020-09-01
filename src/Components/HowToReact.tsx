//For tutorial use only
//always remember to import react as your first statement
import React from "react";
//other imports follow import {exportClassName} from 'fileLocation' or import defaultClassName from 'fileLocation' if it is exported as a default class in the file

//state and props are declared above the export function

interface HowToReactProps {
  //props go in here
}
interface HowToReactState {
  //state parameters go here
}

//follow this convention when declaring new component exports,
//always React.Components<PropsInterface, StateInterface>
export class HowToReact extends React.Component<HowToReactProps, HowToReactState> {
  //state is set in the constructor, but to update state in a function use this.setState({ stateid: newValue})
  // constants and function calls are usually declared here

  //render function returns a single element I usually wrap them as a fragment (<> </>) and not a <div></div>
  render() {
    //you should remeber to put your semicolon at the end of the return statement, but it will compile without it
    return (
      <>
        <button>Click me</button>
      </>
    );
  }
}
