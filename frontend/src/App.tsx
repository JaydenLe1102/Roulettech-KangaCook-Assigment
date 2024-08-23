//import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { GlobalProvider } from './utils/useContext'

import Recipes from './pages/RecipesPage'
import AddRecipe from './pages/AddRecipePage'
import MenuBar from './components/Menu'

import './App.css'
import { useState } from 'react';
import { RecipeResponse } from './types/Recipe.interface';

function App() {
	
	
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [recipes, setRecipes] = useState<RecipeResponse[] >([]);
	const [savedRecipes, setSavedRecipes] = useState<RecipeResponse[] >([]);
	
	const useContextState = {
		searchQuery, setSearchQuery,
		recipes, setRecipes,
		savedRecipes, setSavedRecipes
	}
	
	return (
		<GlobalProvider value= {useContextState}>
		<Router>
			<MenuBar />
			<Routes>
				<Route path='/' element={<Recipes />} />
				<Route path='/add_recipe' element={<AddRecipe />} />
			</Routes>
		</Router>
		</GlobalProvider>
	)
}

export default App
