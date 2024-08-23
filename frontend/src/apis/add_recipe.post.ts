import Recipe, {RecipeResponse} from "../types/Recipe.interface";
import axios from 'axios';

import { config } from "../config";


const BACKEND_URL = config.BACKEND_URL;




async function addRecipe(recipe: Recipe): Promise<RecipeResponse | null> {
	const formData = new FormData();

	// Append the text fields
	formData.append('title', recipe.title);
	formData.append('keywords', JSON.stringify(recipe.keywords));
	formData.append('types', JSON.stringify(recipe.types));
	formData.append('description', recipe.description);
	formData.append('time', recipe.time.toString());
	formData.append('servings', recipe.servings.toString());
	formData.append('ingredients', JSON.stringify(recipe.ingredients));
	formData.append('instructions', JSON.stringify(recipe.instructions));
	formData.append('calories', recipe.calories.toString());

	// Append the image file
	if (recipe.image) {
			formData.append('image', recipe.image); // Assuming `recipe.image` is a File object
	}

	try {
			// Send the POST request
			const response = await axios.post(BACKEND_URL! + "/recipes/", formData, {
					headers: {
							'Content-Type': 'multipart/form-data'
					}
			});
			
			// Return the response data
			const responseRecipe: RecipeResponse = {
					id: response.data.id,
					title: response.data.title,
					image: response.data.image,
					keywords: response.data.keywords,
					types: response.data.types,
					description: response.data.description,
					time: response.data.time,
					servings: response.data.servings,
					ingredients: response.data.ingredients,
					instructions: response.data.instructions,
					calories: response.data.calories,
			};
			
			console.log(responseRecipe);
			
			return responseRecipe
			
	} catch (error) {
			console.error('Error uploading recipe:', error);
			
			return null;
	}
}

export default addRecipe;