import ActionCard from "./components/action-card/action-card.component";
import Form from "./components/form/form.component";
import Header from "./components/header/header.component";
import IngridientsList from "./components/ingridients-list/ingridients-list.component";
import RecipeCard from "./components/recipe-card/recipe.component";
import MainComponent from "./containers/main";
import { ingredients, header } from "./data/dbMock";
import { useState } from "react";
import { getRecipe } from "./utils/ai";

function App() {
  const [currentIngredients, setCurrentIngredients] = useState(ingredients);
  const [recipe, setRecipe] = useState({
    recipeData: null,
    isLoading: false,
    isRecipeShown: false,
  });

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

  const handleShowRecipe = async () => {
    //Setting the loading state to true
    setRecipe((prevRecipeState) => ({ ...prevRecipeState, isLoading: true }));
    // Call get recipe
    let recipeRecived = "";
    try {
      recipeRecived = await getRecipe(
        currentIngredients,
        "http://localhost:5001/ai-request"
      );
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch recipe");
    }
    // Check validity of the data retrieved.
    if (recipeRecived) {
      setRecipe((prevState) => ({
        ...prevState,
        recipeData: recipeRecived,
        isLoading: false,
        isRecipeShown: true,
      }));
    }
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
          <ActionCard
            handleShowRecipe={handleShowRecipe}
            isLoading={recipe.isLoading}
          />
        )}
        {recipe.isRecipeShown ? (
          <RecipeCard recipe={recipe.recipeData} />
        ) : (
          <></>
        )}
      </MainComponent>
    </>
  );
}

export default App;
