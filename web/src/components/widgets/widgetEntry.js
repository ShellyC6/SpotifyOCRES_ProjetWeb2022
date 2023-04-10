import React from "react";
import "./widgetEntry.css";

export default function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="entry-body d-flex">
      <img src={image} alt={title} className="entry-image" />
      <div className="entry-right-body d-flex">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}