import { useEffect } from 'react'
import getRecipes from '../apis/recipes/recipes.get'

import Recipe from '../components/Recipes/Recipes'
import SearchBar from '../components/Recipes/Search'

import { RecipeResponse } from '../types/Recipe.interface'
import { Typography } from '@mui/material'
import { useGlobal } from '../utils/useContext'

function Recipes() {
	const { setRecipes } = useGlobal()

	useEffect(() => {
		const loadRecipe = async () => {
			try {
				const recipeData: RecipeResponse[] = await getRecipes()
				setRecipes(recipeData)
			} catch (error) {
				console.error('Failed to fetch recipe:', error)
				
			}
		}

		loadRecipe()
	}, [])

	return (
		<>
			<Typography
				variant='h4'
				component='h1'
				gutterBottom
				sx={{ marginTop: '100px' }}
			>
				Recipes
			</Typography>
			<SearchBar />
			<Recipe />
		</>
	)
}

export default Recipes
