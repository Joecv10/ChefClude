/* eslint-disable react/prop-types */
import "./action-card.styles.scss";

const ActionCard = (props) => {
  const { handleShowRecipe, isLoading, ref } = props;
  return (
    <>
      <div ref={ref} className="bigger-container-action-card">
        <div className="container-action-card">
          <div className="text-container-action-card">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <div className="button-container-action-card">
            <button onClick={handleShowRecipe}>
              {!isLoading ? "Get a recipe" : "Generating your recipe…"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionCard;
