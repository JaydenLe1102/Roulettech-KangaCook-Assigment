import {RecipeResponse} from "../../types/Recipe.interface";
import axios from 'axios';

import { config } from "../../config";


const BACKEND_URL = config.BACKEND_URL;

const searchRecipes = async (searchQuery: string) : Promise<RecipeResponse[]> => {
	
	const response = await axios.get(`${BACKEND_URL}/search?query=${searchQuery}`);
	
	return response.data;
};


export default searchRecipes;