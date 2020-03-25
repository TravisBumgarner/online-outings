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
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    link = models.ForeignKey(Link, on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return self.name
