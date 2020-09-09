//Always import react when designing a new page or component
import React from 'react';

//Declare prop and state interfaces after the imports, constant declarations and style references
//props are inherited from a parent component high up the chain
interface ReactTutorialComponentProps{
    propStatus:string
}
//state is held by a component and passed on to a child if needed at a lower level. 
interface ReactTutorialComponentState{
    stateStatus:string
}
//exports follow this conventaion, unless you are exporting more than one item from a single class.
//If not exporting a single item then drop the default from the class declaration
export default class ReactTutorialComponent extends React.Component<ReactTutorialComponentProps, ReactTutorialComponentState>{
    //if using a constructor, onComponentDisUpdate, etc. those should be declared first. See react
    // documentation for details
    
    //This is where state should be initially set. You can also use a constructor: See the react
    // documentation page for more info
    state = {
        stateStatus: this.props.propStatus
    }
    //variables are delcared right after the state as nameVar : type = assignedValue?;
    someValue: any = this.state.stateStatus;

    //Functions are handled after constant declarations
    //Action functions such as onClick calls follow this standard handle + 'ActionPerformed'
    handleSomeAction = () =>{}
    
    //this is where you return what this specific component or page is rendering to the user
    render(){
        return (
          <>
            <p>this is where you render your html and other components in</p>
          </>
        );
    }
}

//This is where the next class item would begin if doing multiple in one file.
//This is not normally used and as far as I'm aware bad practice since each component should house
// one main export for code clarity. 
export class AnotherClass extends React.Component<ReactTutorialComponentProps, ReactTutorialComponentState>{
    //if using a constructor, onComponentDisUpdate, etc. those should be declared first. See react
    // documentation for details
    
    //This is where state should be initially set. You can also use a constructor: See the react
    // documentation page for more info
    state = {
        stateStatus: this.props.propStatus
    }
    //variables are delcared right after the state as nameVar : type = assignedValue?;
    someValue: any = this.state.stateStatus;

    //Functions are handled after constant declarations
    //Action functions such as onClick calls follow this standard handle + 'ActionPerformed'
    handleSomeAction = () =>{}
    
    //this is where you return what this specific component or page is rendering to the user
    render(){
        return (
          <>
            <p>this is where you render your html and other components in</p>
          </>
        );
    }
}