from django.db import models


# class Requirements(model.Model)


class Link(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=300)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Activity(models.Model):
    name = models.CharField(max_length=100)
    is_published = models.BooleanField(default=False)
    date_created = models.DateField(auto_now=True)
    category = models.ManyToManyField("Category")
    link = models.ManyToManyField("Link")
    description = models.TextField()

    def __str__(self):
        return self.name
