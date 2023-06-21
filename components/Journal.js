import React from "react";

export default function Journal(props) {
  return (
    <div className="journal">
      <img src={props.item.imageUrl} className="place" alt="Japan" />
      <div className="card--info">
        <span><img className="placeholder" src="./placeholder.png" />{props.item.location}</span>
        <a href={props.item.googleMapsUrl} className="gray" target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
        <h1 className="journal-title">{props.item.title}</h1>
        <p className="journal-date">
          <span className="bold">{props.item.startDate} - {props.item.endDate}</span>
        </p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
