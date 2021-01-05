import React, {Component} from "react";
import CalendarReact from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {ReactComponent as CalendarIcon} from "../../static/images/calendar/calendar-icon.svg";

class Calendar extends Component {
  state = {
    showCalendar: false,
    value: new Date(Date.now()),
  }

  handleClickCalendarBtn = () => {
    this.setState(prevState => ({showCalendar: !prevState.showCalendar}))
    console.log("state: ", this.state);
  }

  handleChangeCalendar = (input) => {
    this.setState({value: input})
  }

  render() {
    const {showCalendar, value} = this.state;
    console.log("value", value)
    return (
      <div>
        <div onClick={this.handleClickCalendarBtn}>
          <CalendarIcon/>
        </div>
        {showCalendar && <CalendarReact
          onChange={this.handleChangeCalendar}
          value={value}
        />}
      </div>
    );
  }
}

export default Calendar;