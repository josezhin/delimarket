from django.contrib import admin
from django.contrib.auth.admin import UserAdmin


from api.models import Country, DocumentType, User, Customer

# Register your models here.
admin.site.register(Country)
admin.site.register(DocumentType)
admin.site.register(User, UserAdmin)
admin.site.register(Customer, UserAdmin)
