
import { useState } from "react";
import SearchBar from "../components/Recipes/SearchBar";

import { GlobalProvider } from "../utils/useContext";
import Recipe from "../types/Recipe.interface";


function Recipes() {
	
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [recipes, setRecipes] = useState<Recipe[] >([]);
	
	const useContextState = {
		searchQuery, setSearchQuery,
		recipes, setRecipes
	}
	
	return (
		<GlobalProvider value= {useContextState}>
			<h1>Recipes</h1>
			<SearchBar />
		</GlobalProvider>
	)
	
}

export default Recipes;