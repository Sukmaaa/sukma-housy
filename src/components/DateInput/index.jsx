import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { useState } from "react";
import styles from "./DateInput.module.css";

import calendarIcon from "../../assets/images/icon/calendar-icon.svg";
import verticalLine from "../../assets/images/icon/vertical-line.svg";
import dropdownIcon from "../../assets/images/icon/dropdown-icon.svg";

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState();
  return (
    //tadinya tag form
    <div className={styles.dateForm}>
      <img src={calendarIcon} alt="calendar icon" width="24px" />
      <img
        className={styles.verticalLine}
        src={verticalLine}
        alt="border"
        height="24px"
      />
      <img
        className={styles.dropdownIcon}
        src={dropdownIcon}
        alt="dropdown icon"
        width="24px"
      />
      <div>
        <DatePicker
          className={styles.datePicker}
          placeholderText="Select your date"
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
        />
      </div>
    </div>
  );
};

export default DateInput;
