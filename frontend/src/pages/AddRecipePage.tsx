

import { Typography } from '@mui/material';
import AddRecipeForm from '../components/AddRecipe/AddRecipesForm';


function AddRecipe() {
	
	
	
	return (
		<>
      <Typography variant='h4' component='h1' gutterBottom sx={{marginTop: '100px'}}>
        Add a New Recipe
      </Typography>
			<AddRecipeForm />
		</>
	)
	
}

export default AddRecipe;