# Recipe Dictionary Backend
## Setup

Make sure to install the dependencies:

```bash
cd backend

#Window
python -m venv venv_name

#MacOS
python3 -m venv venv_name


#Window
source venv_name/Script/activate

#MacOS
source venv_name/bin/activate


#Window
pip install -r requirements.txt

#MacOS
pip3 install -r requirements.txt
```

## 🚀 Development

Start the development server on http://localhost:8000/

```bash
cd api

#Window
python manage.py runserver

#MacOS
python3 manage.py runserver
```


### To Reset the data available in the code (you will see no recipe when run the frontend)
```bash
1. Delete db.sqlite3: 

cd backend/api

rm -rf db.sqlite3

2. Reload the sqlite server:


#Window
python manage.py makemigrations
python manage.py migrate

#MacOS
python3 manage.py makemigrations
python3 manage.py migrate


3. Run server:

#Window
python manage.py runserver

#MacOS
python3 manage.py runserver
```


### To load the initial data in backend/script/ 

This will insert all the recipe in recipes.json to the database

```bash
1. Run the server (instruction above)
2. Run the script

cd backend/script

#Window
python backendDataScript.py

#MacOS
python3 backendDataScript.py
```


## Endpoints
| HTTP Methods | URL | Column 3 |
|---|---|---|
| GET |  http://localhost:8000/ | Welcome Endpoint, contain single welcome text |
| GET | http://localhost:8000/api/recipes | Return all recipes in the database |
| POST | http://localhost:8000/api/recipes | Send post request to this endpoint with data to create new recipes |
| GET | http://localhost:8000/api/search/?query='{query}'| Search available recipes in with a search query text | 







