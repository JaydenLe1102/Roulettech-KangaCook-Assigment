import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    title: '',
    image: null,
    keywords: '',
    types: '',
    description: '',
    time: '',
    servings: '',
    ingredients: '',
    instructions: '',
    calories: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission logic, e.g., sending the data to a server
    console.log('Submitted Recipe:', recipe);
  };
	
	const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        image: file,
        imageUrl: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload Image
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                accept="image/*"
              />
            </Button>
            {recipe.image && (
              <img
                src={recipe.image}
                alt="Preview"
                style={{ marginTop: '10px', maxWidth: '100%' }}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Keywords (Please separate each keyword with a comma)"
              name="keywords"
              value={recipe.keywords}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Types (Please separate each type with a comma)"
              name="types"
              value={recipe.types}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={recipe.description}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Time (minutes)"
              name="time"
              type="number"
              value={recipe.time}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Servings"
              name="servings"
              type="number"
              value={recipe.servings}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Ingredients (Please put each ingredient on one line)"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={6}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Instructions (Please put each steps on one line)"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={6}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Calories"
              name="calories"
              type="number"
              value={recipe.calories}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Recipe
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default RecipeForm;
