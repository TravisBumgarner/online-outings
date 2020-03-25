# Generated by Django 3.0.4 on 2020-03-25 22:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200325_2216'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='link',
        ),
        migrations.AddField(
            model_name='link',
            name='activity',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='link', to='api.Activity'),
        ),
        migrations.AlterField(
            model_name='link',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='link',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
    ]