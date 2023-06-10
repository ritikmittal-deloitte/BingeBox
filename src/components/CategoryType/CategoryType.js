import React from "react";
import "./CategoryType.scss";
export default function CategoryType({ text, setCategories, type }) {
  const handleCategories = () => {
    if (type === "genre") {
      setCategories(text);
    }
  };
  return (
    <div
      className="box-grey"
      onClick={(e) => {
        handleCategories();
      }}
    >
      &nbsp; {text}
      &nbsp;{" "}
    </div>
  );
}
