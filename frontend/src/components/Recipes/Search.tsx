



import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';
import { useGlobal } from "../../utils/useContext";
import searchRecipes from "../../apis/search/search.get";
import { RecipeResponse } from "../../types/Recipe.interface";

const SearchBar = () => {
	
	const { searchQuery, setSearchQuery, setRecipes} = useGlobal();
	
	const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		
		const newSearchQuery = e.target.value;
		
		setSearchQuery(newSearchQuery);
		
		

	}
	
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const recipes: RecipeResponse[] =  await searchRecipes(searchQuery);
		
		setRecipes(recipes);
	};
	
	return (
	<Box
		sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			paddingY: '20px'
		}}
	>
		<Paper
			component='form'
			onSubmit={handleSubmit} 
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%' }}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search'
				value={searchQuery}
				onInput={handleInputChange}
			/>
			<IconButton type="submit" sx={{ p: '10px' }} aria-label='search'>
				<SearchIcon />
			</IconButton>
		</Paper>
</Box>
	)
};


export default SearchBar;