from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import *


class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Link
        fields = (
            'id',
            'name',
            'url'
        )


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = (
            'id',
            'name'
        )


class ActivitySerializer(serializers.ModelSerializer):
    link = LinkSerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True, many=True)

    class Meta:
        model = Activity
        fields = (
            'id',
            'name',
            "is_published",
            "date_created",
            "category",
            "link",
            "description"
        )