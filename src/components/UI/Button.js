import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.button}>
      <span>Button in header</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default Button;
