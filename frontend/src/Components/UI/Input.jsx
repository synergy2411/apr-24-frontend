import classes from "./Input.module.css";
import { useState } from "react";

// Controlled Component
function Input(props) {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (event) => setInputValue(event.target.value);

  //   const inputStyle = {
  //     backgroundColor: "lightgrey",
  //     borderRadius: "5px",
  //     padding: "12px",
  //     color: "#222",
  //   };

  //   return <input style={inputStyle} />;

  return (
    <input
      className={classes["input-style"]}
      {...props}
      value={inputValue}
      onChange={inputChangeHandler}
    />
  );
}

export default Input;
