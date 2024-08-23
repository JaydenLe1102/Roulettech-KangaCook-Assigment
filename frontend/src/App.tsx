//import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Recipes from './pages/RecipesPage'
import AddRecipe from './pages/AddRecipePage'
import MenuBar from './components/MenuBar'

import './App.css'

function App() {
	return (
		<Router>
			<MenuBar />
			<Routes>
				<Route path='/' element={<Recipes />} />
				<Route path='/add_recipe' element={<AddRecipe />} />
			</Routes>
		</Router>
	)
}

export default App
