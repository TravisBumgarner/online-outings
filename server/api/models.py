from django.db import models
import uuid

# class Requirements(model.Model)


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Activity(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    date_created = models.DateField()
    categories = models.ManyToManyField("Category")
    description = models.TextField()

    def __str__(self):
        return self.name


class Link(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    url = models.URLField(blank=True, null=True)
    activity = models.ForeignKey(
        Activity, on_delete=models.CASCADE, blank=True, null=True, related_name="links"
    )

    def __unicode__(self):
        return self.name
