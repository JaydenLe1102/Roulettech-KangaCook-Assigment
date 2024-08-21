import json
import requests


# Load the JSON data from the file
with open('./media/recipes.json') as f:
    recipes = json.load(f)

# URL of the Django API endpoint
url = 'http://localhost:8000/recipes/'


# Loop through each recipe and make a POST request to the API
for recipe in recipes:
    # Prepare the data and files
    data = {
        'title': recipe['title'],
        'keywords': recipe['keywords'],
        'types': recipe['types'],
        'description': recipe['description'],
        'time': recipe['time'],
        'servings': recipe['servings'],
        'ingredients': recipe['ingredients'],
        'instructions': recipe['instructions'],
        'calories': recipe['calories'],
    }

    # Open the image file in binary mode
    image_path = recipe['imageUrl']
    with open(image_path, 'rb') as image_file:
        files = {'image': image_file}

        # Send the POST request with both data and files
        response = requests.post(url, data=data, files=files)

    if response.status_code == 201:
        print(f'Successfully added: {recipe["title"]}')
    else:
        print(f'Failed to add: {recipe["title"]}. Status code: {response.status_code}')
