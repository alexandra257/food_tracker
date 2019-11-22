import React from "react";
import "./App.css";
import DayComponent from "./components/DayComponent.js"; //importing the DayComponent
import DayPicker from "./components/DayPicker.js"; //importing the DayPicker component




class App extends React.Component {

  constructor(props) {          //sets up constructor
    super(props);               //sets up the properties
    this.state = { dates: [] }   //sets the default state (to dates: empty array)

    this.onDaySelect = this.onDaySelect.bind(this)        //binds onDaySelect to this Class? 
  }

  //we need to have a dynamic list of days (which is why we set up state & delete hard coded components)
  //list is dymanic so we can add/reorder/delete days etc

  //display each date, go over each date & print them on the screen
  //'this.state.dates' gets the array, 'map' goes over the array and gets each item in the array, myDay becomes whatever each element is



  onDaySelect(selectedDay) {
    let nextDay = { date: selectedDay }     //making a new day, extracting date value from calendar
    let newDays = this.state.dates          //
    newDays.push(nextDay)

    this.setState({ dates: newDays }) //updating state
    console.log('date chosen')
    console.log(selectedDay.getDate())
  }


  render() {
    return (
      <div className="App" >
        <header className="App-header"> My Food Tracker
        <br />
          <br />


          <DayPicker onDaySelect={this.onDaySelect} />


          {this.state.dates.map(myDay => {
            return (<DayComponent date={myDay.date} />)
          })}


        </header>
      </div >
    );
  }

}

export default App;


