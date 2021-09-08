import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const addHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
        }}
      />
      <button className={classes["button"]} onClick={addHandler}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
