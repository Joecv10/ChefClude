/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";
import "./recipe.styles.scss";

const RecipeCard = (props) => {
  const { recipe } = props;

  return (
    <>
      <section className="recipe-card-container">
        <div className="recipe-card-wrapper">
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <ReactMarkdown>{recipe}</ReactMarkdown>
          </article>
        </div>
      </section>
    </>
  );
};

export default RecipeCard;
