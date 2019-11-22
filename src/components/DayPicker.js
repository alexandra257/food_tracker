import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

/*const symptomStyle = `.DayPicker-Day--highlighted {
    background-color: orange;
    color: white;
  }`;
                <style>{symptomStyle}</style> <- can use this above div


const modifiers = {
    highlighted: new Date(2019, 7, 19),
};*/


/*function renderDay(day) {
    const date = day.getDate();
}*/

export default class BasicConcepts extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: undefined,

        };
    }



    handleDayClick(day) {
        this.setState({ selectedDay: day });
        this.props.onDaySelect(day);
    }


    /* the below code would deselect the day. i'd rather it populate another component, then have a delete 'X' option instead
    if (selected) {
  this.setState({ selectedDay: undefined });
  return;*/




    render() {
        return (
            <div>
                <DayPicker
                    onDayClick={this.handleDayClick}
                    selectedDays={this.state.selectedDay}
                    month={new Date(2019, 7)} //sets start month of call to august 2019
                />
                {this.state.selectedDay ? (
                    <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
                ) : (
                        <p>Please select a day :)</p>
                    )}
            </div>
        );
    }
}