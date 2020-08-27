//For tutorial use only
//always remember to import react as your first statement
import React from 'react';

//state and props are usually declared above the export function

//follow this convention when declaring new component exports
export class Buttons extends React.Component{

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