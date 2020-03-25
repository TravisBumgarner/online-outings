# Generated by Django 3.0.4 on 2020-03-25 22:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='category',
        ),
        migrations.AddField(
            model_name='activity',
            name='category',
            field=models.ManyToManyField(to='api.Category'),
        ),
        migrations.RemoveField(
            model_name='activity',
            name='link',
        ),
        migrations.AddField(
            model_name='activity',
            name='link',
            field=models.ManyToManyField(to='api.Link'),
        ),
    ]