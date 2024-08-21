from .models import Recipe
from rest_framework import serializers


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'image', 'keywords', 'types', 'description', 'time', 'servings', 'ingredients', 'instructions', 'calories']
        
        