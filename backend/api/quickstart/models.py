from django.db import models
from django.conf import settings
import os

# Create your models here.

class Recipe(models.Model):
		title = models.CharField(max_length=255)
		image = models.ImageField(upload_to='images/', blank=True, null=True)
		keywords = models.JSONField(default=list, blank=True)
		types = models.JSONField(default=list, blank=True)
		description = models.TextField(blank=True)
		time = models.IntegerField(help_text="Time in minutes")
		servings = models.IntegerField()
		ingredients = models.JSONField(default=list, blank=True)
		instructions = models.JSONField(default=list, blank=True)
		calories = models.IntegerField()

		def __str__(self):
				return self.title
			
			

		def save(self, *args, **kwargs):
			if not self.id:
					super().save(*args, **kwargs)

			if self.image and not self.image.name.startswith(f'images/{self.id}'):
				print("Original image name:")
				print(self.image.name)
				old_image_path = os.path.join(settings.MEDIA_ROOT, self.image.name)
				ext = os.path.splitext(self.image.name)[1]  
				self.image.name = f'images/{self.id}{ext}'
				new_image_path = os.path.join(settings.MEDIA_ROOT, self.image.name)

				if os.path.exists(old_image_path):
						os.rename(old_image_path, new_image_path)

				kwargs['force_insert'] = False 
				kwargs['force_update'] = True   
				super().save(*args, **kwargs)

        
      
      
      