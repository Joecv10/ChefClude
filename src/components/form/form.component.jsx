/* eslint-disable react/prop-types */
import "./form.styles.scss";

const Form = (props) => {
  const { addIngredient } = props;

  const setNewIngredient = (formData) => {
    console.log("This is the entry", Object.fromEntries(formData));
    const newIngredient = formData.get("ingredient");
    newIngredient === ""
      ? alert("Please enter an ingredient")
      : addIngredient(newIngredient);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const newIngredient = formData.get("ingredient");
  //   newIngredient === ""
  //     ? alert("Please enter an ingredient")
  //     : addIngredient(newIngredient);
  //   e.currentTarget.reset();
  // };
  return (
    <>
      <form className="add-ingredient-form" action={setNewIngredient}>
        <input
          aria-label="Add Ingridient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
    </>
  );
};

export default Form;
