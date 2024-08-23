

import {RecipeResponse} from "../../types/Recipe.interface";
import axios from 'axios';

import { config } from "../../config";


const BACKEND_URL = config.BACKEND_URL;




const getRecipes = async () : Promise<RecipeResponse[]> => {
	
	const response = await axios.get(`${BACKEND_URL}/recipes`);
	console.log(response.data);
	
	return response.data;
};


export default getRecipes;