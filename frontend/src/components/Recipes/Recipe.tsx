import { Container, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

function Recipe() {
	const recipes = [
		{
			id: 1,
			title: 'Spaghetti Bolognese',
			description: 'A classic Italian pasta dish with a rich and savory meat sauce.',
			time: '45 mins',
			servings: 4,
			image: '/images/spaghetti-bolognese.jpg'
		},
		{
			id: 2,
			title: 'Chicken Caesar Salad',
			description: 'A fresh and crunchy salad with grilled chicken, romaine lettuce, and Caesar dressing.',
			time: '25 mins',
			servings: 2,
			image: '/images/chicken-caesar-salad.jpg'
		},
		{
			id: 3,
			title: 'Vegetable Stir-Fry',
			description: 'A colorful and healthy stir-fry with a mix of fresh vegetables and a savory sauce.',
			time: '20 mins',
			servings: 3,
			image: '/images/vegetable-stir-fry.jpg'
		},
		{
			id: 4,
			title: 'Pancakes',
			description: 'Fluffy and golden pancakes, perfect for a weekend breakfast.',
			time: '25 mins',
			servings: 4,
			image: '/images/pancakes.jpg'
		},
		{
			id: 5,
			title: 'Chocolate Chip Cookies',
			description: 'Classic chocolate chip cookies with a crispy edge and soft center.',
			time: '25 mins',
			servings: 24,
			image: '/images/chocolate-chip-cookies.jpg'
		},
		{
			id: 6,
			title: 'Chocolate Chip Cookies',
			description: 'Classic chocolate chip cookies with a crispy edge and soft center.',
			time: '25 mins',
			servings: 24,
			image: '/images/chocolate-chip-cookies.jpg'
		},
		{
			id: 7,
			title: 'Chocolate Chip Cookies',
			description: 'Classic chocolate chip cookies with a crispy edge and soft center.',
			time: '25 mins',
			servings: 24,
			image: '/images/chocolate-chip-cookies.jpg'
		},
		{
			id: 8,
			title: 'Chocolate Chip Cookies',
			description: 'Classic chocolate chip cookies with a crispy edge and soft center.',
			time: '25 mins',
			servings: 24,
			image: '/images/chocolate-chip-cookies.jpg'
		},
		{
			id: 9,
			title: 'Chocolate Chip Cookies',
			description: 'Classic chocolate chip cookies with a crispy edge and soft center.',
			time: '25 mins',
			servings: 24,
			image: '/images/chocolate-chip-cookies.jpg'
		},
		{
			id: 10,
			title: 'Chocolate Chip Cookies',
			description: 'Classic chocolate chip cookies with a crispy edge and soft center.',
			time: '25 mins',
			servings: 24,
			image: '/images/chocolate-chip-cookies.jpg'
		}
	];

	return (
		<Container maxWidth='md' sx={{ marginTop: '20px' }}>
			<Grid container spacing={4}>
				{recipes.map((recipe) => (
					<Grid item xs={12} sm={6} md={4} key={recipe.id}>
						<Card>
							<CardMedia
								component='img'
								height='120'
								image={recipe.image}
								alt={recipe.title}
							/>
							<CardContent>
								<Typography variant='h6' component='div'>
									{recipe.title}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{recipe.description}
								</Typography>
								<Typography variant='body2' color='text.secondary' sx={{ marginTop: '10px' }}>
									Time: {recipe.time}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Servings: {recipe.servings}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default Recipe;
