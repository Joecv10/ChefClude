export const getRecipe = async (ingredientsList, url) => {
  const ingredients = ingredientsList.map((ingredient) => ingredient.name);

  const queryUrl = `${url}?ingredients=${encodeURIComponent(ingredients)}`;

  const aiRecipe = await fetch(queryUrl, {
    method: "GET",
  });

  if (!aiRecipe.ok) {
    throw new Error("Failed to fetch recipe");
  }

  const recipeContent = await aiRecipe.json();

  console.log(recipeContent.output_text);

  return recipeContent.output_text;
};
