/* eslint-disable react/prop-types */
import "./ingridients-list.styles.scss";

const IngridientsList = (props) => {
  const { ingredients } = props;
  console.log("IngridientsList", ingredients);
  return (
    <>
      <article className="ingredients-list-container">
        <h1>Ingridients on Hand:</h1>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default IngridientsList;
