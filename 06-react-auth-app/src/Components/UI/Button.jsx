import classes from "./Button.module.css";

function Button(props) {
  return <button className={classes["button_style"]} {...props}></button>;
}

export default Button;
