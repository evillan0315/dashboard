import { Card, CardContent } from "@mui/material";
import React from "react";

type DateDisplayProps = {
  dateString: string;
};

const DateDisplay: React.FC<DateDisplayProps> = ({ dateString }) => {
  const formatDate = (date: string): string => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return "Invalid Date";
    }
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(parsedDate);
  };

  const formattedDate = formatDate(dateString);
  if (formattedDate === "Invalid Date") {
    return (
      <div className="flex flex-col items-center p-4 bg-red-100 rounded-lg shadow-md w-48">
        <span className="text-xl font-bold text-red-600">Invalid Date</span>
      </div>
    );
  }

  const [month, day, year] = formattedDate.split(" ");

  return (
    <div className="flex flex-col items-center p-4 bg-transparent rounded-lg shadow-md border border-black w-20">
      <span className="text-4xl font-bold text-cyan-600">
        {day.replace(",", "")}
      </span>
      <span className="text-xl text-gray-700">{month}</span>
      <span className="text-lg text-neutral-100">{year}</span>
    </div>
  );
};

export default DateDisplay;
