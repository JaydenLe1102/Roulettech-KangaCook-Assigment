import Recipe from "../../types/Recipe.interface";




const getRecipes = async () : Promise<Recipe[]> => {
	const response = await fetch('http://localhost:3001/recipes');
	const data = await response.json();
	return data;
};


export default getRecipes;