import React, {useState} from "react";

function FancyInput(props) {
  const [text, changeText] = useState("");

  const handleInputChange = e => {
    const newText = e.target.value;
    changeText(newText);
  }


  const spanClass = text ? "stamp" : "placeholder";
  return (
    <div className="fancy-input">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <span className={spanClass}>
        {props.placeholder}
      </span>
    </div>
  );
}

export default FancyInput;
