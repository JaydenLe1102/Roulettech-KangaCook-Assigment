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
			# Save the object first to generate an ID if it doesn't exist
			if not self.id:
					super().save(*args, **kwargs)

			# Set the image name based on the instance ID
			if self.image and not self.image.name.startswith(f'images/{self.id}'):
				print("Original image name:")
				print(self.image.name)
				old_image_path = os.path.join(settings.MEDIA_ROOT, self.image.name)
				ext = os.path.splitext(self.image.name)[1]  # Get the original extension
				self.image.name = f'images/{self.id}{ext}'  # Set the new image name
				new_image_path = os.path.join(settings.MEDIA_ROOT, self.image.name)

				# Rename the file on disk
				if os.path.exists(old_image_path):
						os.rename(old_image_path, new_image_path)

				# Save again with the updated image name
				kwargs['force_insert'] = False  # Ensure it's not trying to insert a new record
				kwargs['force_update'] = True   # Force the update of the existing record
				super().save(*args, **kwargs)

        
      
      
      