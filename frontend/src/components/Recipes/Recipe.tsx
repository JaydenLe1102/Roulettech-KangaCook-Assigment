import {
	Container,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Grid,
} from '@mui/material'
import { useGlobal } from '../../utils/useContext'
import { RecipeResponse } from '../../types/Recipe.interface'
import RecipeBookButton from './RecipeBookButton'

function Recipe() {
	const { savedRecipes, setSavedRecipes, recipes } = useGlobal()

	const handleClickedButton = (recipe: RecipeResponse) => {
		return () => {
			const isSaved = savedRecipes.some(
				(savedRecipe) => savedRecipe.id === recipe.id
			)
			if (isSaved) {
				const newSavedRecipes = savedRecipes.filter(
					(savedRecipe) => savedRecipe.id !== recipe.id
				)
				setSavedRecipes(newSavedRecipes)
				return
			}
			const newSavedRecipes = [...savedRecipes, recipe]
			setSavedRecipes(newSavedRecipes)
		}
	}

	const isSaved = (recipe: RecipeResponse) => {
		for (let i = 0; i < savedRecipes.length; i++) {
			if (savedRecipes[i].id === recipe.id) {
				return true
			}
		}
		return false
	}

	return (
		<Container maxWidth='md' sx={{ marginTop: '20px' }}>
			<Grid container spacing={4}>
				{recipes.map((recipe) => (
					<Grid item xs={12} sm={6} md={4} key={recipe.id}>
						<Card
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								'&:hover': {
									backgroundColor: '#b9d8f7',
									borderWidth: '2px',
									borderStyle: 'solid',
								},
								borderColor: isSaved(recipe) ? 'primary.main' : '#00000000',
								borderWidth: '2px',
								borderStyle: 'solid',
							}}
							onClick={handleClickedButton(recipe)}
						>
							<CardMedia
								component='img'
								height='120'
								image={recipe.image}
								alt={recipe.title}
							/>
							<CardContent>
								<Typography variant='h6' component='div'>
									{recipe.title}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{recipe.description}
								</Typography>
								<Typography
									variant='body2'
									color='text.secondary'
									sx={{ marginTop: '10px' }}
								>
									Time: {recipe.time}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Servings: {recipe.servings}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
			<RecipeBookButton />
		</Container>
	)
}

export default Recipe
