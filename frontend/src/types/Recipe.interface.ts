

interface Recipe {
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