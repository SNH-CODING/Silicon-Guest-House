# Generated by Django 4.0.4 on 2022-08-11 18:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MyBooking', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='booking',
            old_name='username',
            new_name='user_username',
        ),
    ]
