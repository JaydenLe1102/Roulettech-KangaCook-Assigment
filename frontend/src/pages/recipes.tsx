
import { useState, useEffect } from "react";
import getRecipes from "../apis/recipes/recipes.get";

import Recipe from "../components/Recipes/Recipe";
import SearchBar from "../components/Recipes/searchBar";

import { GlobalProvider } from "../utils/useContext";
import { RecipeResponse } from "../types/Recipe.interface";
import { Typography } from "@mui/material";


function Recipes() {
	
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [recipes, setRecipes] = useState<RecipeResponse[] >([]);
	const [savedRecipes, setSavedRecipes] = useState<RecipeResponse[] >([]);
	
	const useContextState = {
		searchQuery, setSearchQuery,
		recipes, setRecipes,
		savedRecipes, setSavedRecipes
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
			<Typography variant='h4' component='h1' gutterBottom sx={{marginTop: '100px'}}>
        Recipes
      </Typography>
			<SearchBar />
			<Recipe />
		</GlobalProvider>
	)
	
}

export default Recipes;