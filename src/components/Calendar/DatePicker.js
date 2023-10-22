import React from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { calendarActions } from "../../store/calendar-slice";

const DatePicker = () => {
  const dispatch = useDispatch();

  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const handleDateChange = (newValue) => {
    dispatch(calendarActions.setDate(newValue.format("YYYY-MM-DD")));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={dayjs(selectedDate)} onChange={handleDateChange} />
    </LocalizationProvider>
  );
};

export default DatePicker;
