from django.db import models

class Referral(models.Model):
  title = models.CharField(max_length=100)
  click_count = models.IntegerField(default=0)
  created_at = models.DateTimeField(auto_now_add=True)