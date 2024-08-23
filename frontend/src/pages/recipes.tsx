
import { useState, useEffect } from "react";
import getRecipes from "../apis/recipes/recipes.get";

import SearchBar from "../components/Recipes/SearchBar";

import { GlobalProvider } from "../utils/useContext";
import { RecipeResponse } from "../types/Recipe.interface";


function Recipes() {
	
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [recipes, setRecipes] = useState<RecipeResponse[] >([]);
	
	const useContextState = {
		searchQuery, setSearchQuery,
		recipes, setRecipes
	}
	
	useEffect(() => {
    const loadRecipe = async () => {
      try {
        const recipeData: RecipeResponse[] = await getRecipes();
        setRecipes(recipeData);
				
      } catch (error) {
        console.error('Failed to fetch recipe:', error);
      }
    };

    loadRecipe();
  }, []);
	
	
	return (
		<GlobalProvider value= {useContextState}>
			<h1>Recipes</h1>
			<SearchBar />
			
			<ul>
				{recipes.map((recipe) => (
					<li key={recipe.id}>{recipe.title}</li>
				))}
			</ul>
		</GlobalProvider>
	)
	
}

export default Recipes;