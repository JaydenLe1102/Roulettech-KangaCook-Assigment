

# Create your views here.

from rest_framework import viewsets
from .models import Recipe
from .serializers import RecipeSerializer
from django.http import HttpResponse
from rest_framework.views import APIView
from django.db.models import Q
from rest_framework.response import Response

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
class WelcomeView(APIView):
    def get(self, request):
        return HttpResponse("Welcome to Recipe Api!")
      
    
class SearchRecipeView(APIView):
	def get(self, request):
		try:
			queries_str = request.query_params.get('query')
			queries = queries_str.lower().split(' ')
			recipes = Recipe.objects.all()
   
			
   
			filtered_recipes = []
			for recipe in recipes:
					title = recipe.title.lower()
					keywords = ' '.join(recipe.keywords).lower()
					ingredients = ' '.join(recipe.ingredients).lower()
     
					print(recipe.image)
			
					# Check if any query term is in title, keywords, or ingredients
					if all(query in title or query in keywords or query in ingredients for query in queries):
							filtered_recipes.append(recipe)
       

			serializer = RecipeSerializer(filtered_recipes, many=True, context={'request': request})
			return Response(serializer.data)
		except Exception as e:
			return Response({'error': str(e)})