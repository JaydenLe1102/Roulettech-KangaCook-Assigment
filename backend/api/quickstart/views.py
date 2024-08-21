

# Create your views here.

from rest_framework import viewsets
from .models import Recipe
from .serializers import RecipeSerializer
from django.http import HttpResponse
from rest_framework.views import APIView

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    
    
class HelloWorldView(APIView):
    def get(self, request):
        return HttpResponse("Hello, World!")



