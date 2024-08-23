

interface Recipe {
	title: string;
	image?: File;
	keywords: string[];
	types: string[];
	description: string;
	time: number;
	servings: number;
	ingredients: string[];
	instructions: string[];
	calories: number;
}


export interface RecipeResponse {
	id: number;
	title: string;
	image: string;
	keywords: string[];
	types: string[];
	description: string;
	time: number;
	servings: number;
	ingredients: string[];
	instructions: string[];
	calories: number;
}


export default Recipe;
