# Generated by Django 4.0.2 on 2022-02-11 02:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_consume_options_alter_food_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='consume',
            options={'verbose_name': 'consume', 'verbose_name_plural': 'consume'},
        ),
    ]
