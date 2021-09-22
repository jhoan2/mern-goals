import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
// import "./styles.css";
import moment from "moment";

export default function Calendar({ values }) {
  const openDate = new Date();
  const startDate = moment(openDate);
  startDate.subtract(9, "days");
  const endDate = moment(openDate);
  endDate.add(4, "months");
  return (
    <div>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={values}
      />
    </div>
  );
}
