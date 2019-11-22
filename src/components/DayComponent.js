import React from "react";
import "./DayComponent.css";


/*The constructor sets the initial state of the component
 We set snacks to an empty array
 We set the event to fire after the button has been clicked */

 // **remember setState merges the old state with the new, anything not updated will not be discarded!**
 

class DayComponent extends React.Component {
    constructor(props) {                    //set up constructor
        super(props);                       //sets up the properties
        this.state = { snacks: [] };         //set the default state

        this.handleClick = this.handleClick.bind(this);         //always need to bind new handler
        this.handleChange = this.handleChange.bind(this);
    }


    // ** updating state within functions makes your app easier to manage **
    // created handle change to get the value or the inputted text and update the state to store this
    handleChange = (e) => {
        const inputValue = e.target.value           //getting the value of the input, assigning it to inputValue
        this.setState({ inputText: inputValue })    //updating the state with the inputted text
    }


    // created the handleClick function for on click of submit button (event handler)
    // assign a function, so 'this' refers to the correct class
    // we don't want to add () to handleClick in the render method because otherwise it will action each time the state updates
    // setState is a method made available by extending the Component

    handleClick = (e) => {
        e.preventDefault();                                           //stops the page reloading
        let newSnacks = this.state.snacks                           //created newSnacks, setting it equal to snacks
        newSnacks.push(this.state.inputText)                       //pushes the inputted text onto the end of the array (list) that we've called newSnacks
        this.setState({ snacks: newSnacks, inputText: '' });       //updates the state so on each button click, the list updates with the inputted text
    }


    //every time you change state this re-renders
    render() {
        return (
            <div className={DayComponent}>
                <h1>{this.props.date.getDate()}/{this.props.date.getMonth() + 1}</h1> 
                <ol>
                    {this.state.snacks.map(snack => {
                        return <li>{snack}</li>;
                    })}
                </ol>



                <form>
                    <input 
                        type="text" 
                         placeholder="New food" 
                         onChange={this.handleChange} 
                         value={this.state.inputText}>
                    </input>
                    <button
                        type="submit"
                        onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        );

    }
}

export default DayComponent; //exports the DayComponent above so we can access it in App.js


 /*   

      handleClick(e) {
        e.preventDefault();                          //stops the page reloading
        let newSnacks = this.state.snacks                 //defines newSnacks and sets it to existing snacks from the state 
        newSnacks.push(this.state.inputText)                       //gets inputText from the state and pushes it onto the end of newSnacks
                                                                  //nextDay in App.js is equivalent of inputText
         this.setState({ snacks: newSnacks, inputText: '' });


        handleChange(e) {
            const inputValue = e.target.value   //target is the thing the event is happening on
            this.setState({ inputText: inputValue })    //updates the state with the inputValue
        }
    
    */
