import ActionCard from "./components/action-card/action-card.component";
import Form from "./components/form/form.component";
import Header from "./components/header/header.component";
import IngridientsList from "./components/ingridients-list/ingridients-list.component";
import RecipeCard from "./components/recipe-card/recipe.component";
import MainComponent from "./containers/main";
import { ingredients, header } from "./data/dbMock";
import { useState } from "react";

function App() {
  const [currentIngredients, setCurrentIngredients] = useState(ingredients);
  const [showRecipe, setShowRecipe] = useState(false);
  console.log(currentIngredients);

  const addIngredient = (newIngredientName) => {
    const newId =
      currentIngredients.length > 0
        ? Math.max(...currentIngredients.map((i) => i.id)) + 1
        : 1;
    const newIngredient = { id: newId, name: newIngredientName };
    setCurrentIngredients((prevIngredients) => [
      ...prevIngredients,
      newIngredient,
    ]);
  };

  const handleShowRecipe = () => {
    setShowRecipe((prevValue) => !prevValue);
  };
  return (
    <>
      <Header header={header} />
      <MainComponent>
        <Form addIngredient={addIngredient} />
        {currentIngredients.length > 0 ? (
          <IngridientsList ingredients={currentIngredients} />
        ) : (
          <></>
        )}
        {currentIngredients.length > 3 && (
          <ActionCard handleShowRecipe={handleShowRecipe} />
        )}
        {showRecipe ? <RecipeCard /> : <></>}
      </MainComponent>
    </>
  );
}

export default App;
