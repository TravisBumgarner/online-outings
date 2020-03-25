from django.db import models


# class Requirements(model.Model)



class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Activity(models.Model):
    name = models.CharField(max_length=100)
    is_published = models.BooleanField(default=False)
    date_created = models.DateField(auto_now=True)
    category = models.ManyToManyField("Category")
    description = models.TextField()

    def __str__(self):
        return self.name


class Link(models.Model):
    name = models.CharField(max_length=200)
    url = models.URLField(blank=True, null=True)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE, blank=True, null=True, related_name='link')

    def __unicode__(self):
        return self.name
