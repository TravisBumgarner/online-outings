from __future__ import unicode_literals

from django.contrib import admin

from .models import *


@admin.register(Activity)
class GalleryAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


@admin.register(Link)
class GalleryAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


@admin.register(Category)
class GalleryAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )
