import React from "react";

export default function Card(props) {
    const { entryData } = props;
    const { title, content, image } = entryData;
  return (
    <div className="blog-entry">
        <img src={image}/>
        <h2>{title}</h2>
        <p>
          {content}
        </p>
        <button>Read more</button>
    </div>

  );
}
