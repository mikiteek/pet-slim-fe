import React, {Component} from "react";
import CalendarReact from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {connect} from "react-redux";

import diaryActions from "../../redux/diary/diaryActions";
import diarySelector from "../../redux/diary/diarySelector";

import {ReactComponent as CalendarIcon} from "../../static/images/calendar/calendar-icon.svg";
import styles from "./Calendar.module.scss";

class Calendar extends Component {
  state = {
    showCalendar: false,
  }

  handleClickCalendarBtn = () => {
    this.setState(prevState => ({showCalendar: !prevState.showCalendar}))
  }

  handleChangeCalendar = (input) => {
    this.props.onSetCurrentDate(input);
  }

  toFormatTime = (time) => {
    return `${time.getDate().toString().padStart(2, "0")}.${(time.getMonth() + 1).toString().padStart(2, "0")}.${time.getFullYear()}`
  }

  render() {
    const {showCalendar} = this.state;
    const {date, className} = this.props;
    return (
      <div className={className? className: styles.calendarComponent}>
        <div className={styles.dateBlock}>
          <time className={styles.date} dateTime={date}>{this.toFormatTime(date)}</time>
          <div onClick={this.handleClickCalendarBtn} className={styles.iconBtn}>
            <CalendarIcon/>
          </div>
        </div>
        {showCalendar &&
          <div className={styles.calendarBlock}>
            <CalendarReact
              onChange={this.handleChangeCalendar}
              value={date}
              className={styles.calendar}
            />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: diarySelector.getCurrentDate(state),
});

const mapDispatchToProps = {
  onSetCurrentDate: diaryActions.setCurrentDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);