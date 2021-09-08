import classes from "./Input.module.css";
//{...props.input}를 통해 id를 제외한 여러 프로퍼티를 바로 적용함 (프로퍼티라기보다는 객체)
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} className={classes["label"]}>
        {props.label}
      </label>
      <input
        {...props.input}
        className={classes["input"]}
      />
    </div>
  );
};

export default Input;
