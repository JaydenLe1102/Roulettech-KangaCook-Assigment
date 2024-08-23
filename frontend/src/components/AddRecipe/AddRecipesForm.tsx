import React, {FormEventHandler, useState } from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import Recipe, { RecipeResponse } from '../../types/Recipe.interface';
import addRecipe from '../../apis/add_recipe.post';

interface RecipeForm {
	title: string;
	image: File | undefined;
	imageName: string;
	keywords: string;
	types: string;
	description: string;
	time: number;
	servings: number;
	ingredients: string;
	instructions: string;
	calories: number;
}

function RecipeForm() {
  const [recipe, setRecipe]= useState<RecipeForm>({
    title: '',
    image: undefined ,
		imageName: '',
    keywords: '',
    types: '',
    description: '',
    time: 0,
    servings: 0,
    ingredients: '',
    instructions: '',
    calories: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    
		const keywords = recipe.keywords.split(',').map((keyword) => keyword.trim());
		const types = recipe.types.split(',').map((type) => type.trim());
		const ingredients = recipe.ingredients.split('\n').map((ingredient) => ingredient.trim());
		const instructions = recipe.instructions.split('\n').map((instruction) => instruction.trim());
		
		const recipe_obj : Recipe = {
			title: recipe.title,
			image: recipe.image,
			description: recipe.description,
			time: recipe.time,
			servings: recipe.servings,
			calories: recipe.calories,
			instructions,
			ingredients,
			keywords,
			types,
		};
		
		console.log('Recipe Object:', recipe_obj);
		
		const recipeResponse: RecipeResponse | null= await addRecipe(recipe_obj);
		
    console.log('Submitted Recipe:', recipeResponse);
  };
	
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target!.files![0]!;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      image: file,
      imageName: file ? file.name : '',
    }));
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', mt: 4, minWidth:'300px'}}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Title'
              name='title'
              value={recipe.title}
              onChange={handleChange}
              variant='outlined'
              required
            />
          </Grid>
					<Grid item xs={12} container alignItems='center'>
						<Box
							sx={{
								p: 1,
								mr: 2,
								width: '50%',
								minWidth: '100px',
								border: '1px solid #ccc',
								borderRadius: '4px',
								minHeight: '40px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{recipe.imageName ? (
								<Typography>{recipe.imageName}</Typography>
							) : (
								<Typography variant='body2' color='textSecondary'>
									Please upload your recipe image
								</Typography>
							)}
						</Box>
						<input
								accept='image/*'
								style={{ display: 'none' }}
								id='upload-file'
								type='file'
								onChange={handleFileChange}
							/>
						<label htmlFor='upload-file'>
							<Button 
							variant='contained' 
							component='span'
              size='large'
							>
								UPLOAD
							</Button>
						</label>

          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Keywords (Please separate each keyword with a comma)'
              name='keywords'
              value={recipe.keywords}
              onChange={handleChange}
              variant='outlined'
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Types (Please separate each type with a comma)'
              name='types'
              value={recipe.types}
              onChange={handleChange}
              variant='outlined'
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Description'
              name='description'
              value={recipe.description}
              onChange={handleChange}
              variant='outlined'
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label='Time (minutes)'
              name='time'
              type='number'
              value={recipe.time != 0 ? recipe.time : ''}
              onChange={handleChange}
              variant='outlined'
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label='Servings'
              name='servings'
              type='number'
              value={recipe.servings != 0 ? recipe.servings : ''}
              onChange={handleChange}
              variant='outlined'
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Ingredients (Please put each ingredient on one line)'
              name='ingredients'
              value={recipe.ingredients}
              onChange={handleChange}
              variant='outlined'
              multiline
              rows={6}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Instructions (Please put each steps on one line)'
              name='instructions'
              value={recipe.instructions}
              onChange={handleChange}
              variant='outlined'
              multiline
              rows={6}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Calories'
              name='calories'
              type='number'
              value={recipe.calories != 0 ? recipe.calories : ''}
              onChange={handleChange}
              variant='outlined'
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' color='primary' fullWidth>
              Create Recipe
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default RecipeForm;
