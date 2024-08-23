import {
	Modal,
	Box,
	Typography,
	Card,
	CardMedia,
	CardContent,
	Grid,
	IconButton,
} from '@mui/material'
import { useGlobal } from '../../utils/useContext'
import DeleteIcon from '@mui/icons-material/Delete'
import { RecipeResponse } from '../../types/Recipe.interface'

interface RecipeModalProps {
	open: boolean
	handleClose: () => void
}

function RecipeModal({ open, handleClose }: RecipeModalProps) {
	const { savedRecipes, setSavedRecipes } = useGlobal()
	const handleDelete = (recipe: RecipeResponse) => {
		return () => {
			const newSavedRecipes = savedRecipes.filter(
				(savedRecipe) => savedRecipe.id !== recipe.id
			)
			setSavedRecipes(newSavedRecipes)
		}
	}

	return (
		<Modal open={open} onClose={handleClose}>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '70%',
					bgcolor: 'background.paper',
					borderRadius: 1,
					boxShadow: 24,
					p: 4,
					maxHeight: '70%',
					overflowY: 'auto',
				}}
			>
				<Typography variant='h6' component='h2' sx={{ marginBottom: '20px' }}>
					Saved Recipes
				</Typography>
				{savedRecipes.length === 0 ? (
					<Typography variant='body1' component='p'>
						No saved recipes
					</Typography>
				) : (
					<Grid container spacing={4}>
						{savedRecipes.map((recipe) => (
							<Grid item xs={12} sm={6} md={4} key={recipe.id}>
								<Card
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										height: '100%',
									}}
								>
									<CardMedia
										component='img'
										height='120'
										image={recipe.image}
										alt={recipe.title}
									/>
									<CardContent sx={{ textAlign: 'center' }}>
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
										<IconButton
											sx={{
												marginTop: '20px',
												'&:hover': {
													backgroundColor: '#b9d8f7',
												},
											}}
											color='error'
											onClick={handleDelete(recipe)}
										>
											<DeleteIcon />
										</IconButton>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				)}
			</Box>
		</Modal>
	)
}

export default RecipeModal
