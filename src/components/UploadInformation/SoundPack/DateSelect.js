import React, { useState } from "react";
import DatePicker from "react-datepicker";

import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../../../assets/icon/calendar.svg";

const DateSelect = () => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = ({ value, onClick }) => (
    <Container onClick={onClick}>
      {value}
      <img src={calendar} alt="calendar" />
    </Container>
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

const Container = styled.button`
  width: 330px;
  height: 40px;
  padding: 10px;

  background-color: transparent;
  border: 1px solid #b5b5b5;

  display: flex;
  justify-content: space-between;
  font-family: "DM Sans";
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;
export default DateSelect;
