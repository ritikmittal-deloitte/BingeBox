import React, { useState } from "react";
import CheckIcon from "./images/check-icon.png";

export default function CardComponent({ item, present, genre, setGenre }) {
  const [selected, setSelected] = useState(present);

  function addPreference(e) {
    if (selected) {
      setGenre(toggleElementInArray(genre, item.category));
      setSelected(false);
    } else {
      setGenre(toggleElementInArray(genre, item.category));
      setSelected(true);
    }
  }

  function toggleElementInArray(array, element) {
    let arr = array;
    const index = arr.indexOf(element);

    if (index !== -1) {
      // Element is already present, so remove it
      arr.splice(index, 1);
    } else {
      // Element is not present, so add it
      arr.push(element);
    }
    for (let i = 0; i < arr.length; i++) {
      console.log(i, arr[i]);
    }
    return arr;
  }

  return (
    <div
      className="card-component"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={(e) => {
        addPreference();
      }}
    >
      {selected && (
        <img
          src={CheckIcon}
          style={{ height: "20%", width: "10%" }}
          alt="not available"
        />
      )}
      <div style={{ fontFamily: "sans-serif", fontWeight: "500" }}>
        {item.category}
      </div>
    </div>
  );
}
