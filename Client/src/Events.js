// add attendance and comments

import React, { useState } from "react";
import eventData from "./EventData.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Events() {
  const [index, setIndex] = useState(0);
  const { title, date, image, text } = eventData[index];
  const checkNumber = (number) => {
    if (number > eventData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return eventData.length - 1;
    }
    return number;
  };
  const nextEvent = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevEvent = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomEvent = () => {
    let randomNumber = Math.floor(Math.random() * eventData.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={title} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{title}</h4>
      <p className="job">{date}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevEvent}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextEvent}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
}

export default Events;
