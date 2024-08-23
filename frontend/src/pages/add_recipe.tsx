

import { Typography } from "@mui/material";
import AddRecipeForm from "../components/AddRecipe/AddRecipesForm";


function AddRecipe() {
	
	
	
	return (
		<>
      <Typography variant="h3" component="h1" gutterBottom>
        Create a New Recipe
      </Typography>
			<AddRecipeForm />
		</>
	)
	
}

export default AddRecipe;