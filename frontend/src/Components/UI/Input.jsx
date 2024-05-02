import classes from "./Input.module.css";

function Input(props) {
  const inputStyle = {
    backgroundColor: "lightgrey",
    borderRadius: "5px",
    padding: "12px",
    color: "#222",
  };

  //   return <input style={inputStyle} />;

  return <input className={classes["input-style"]} {...props} />;
}

export default Input;
