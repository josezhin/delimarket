from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Country"
        verbose_name_plural = "countries"
        ordering = ["id"]


class DocumentType(models.Model):
    code = models.CharField(max_length=50)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "DocumentType"
        verbose_name_plural = "DocumentsTypes"
        ordering = ["id"]


class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
    country = models.ForeignKey(Country, on_delete=models.PROTECT, null=True)
    address = models.CharField(max_length=250)
    cell = models.CharField(max_length=50)
    is_client = models.BooleanField(default=False, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "password"]

    def __str__(self):
        if hasattr(self, "customer"):
            return f"Cliente: {self.customer.username}"
        else:
            return f"Usuario: {self.username}"


class Customer(User):
    documenttype = models.ForeignKey(
        DocumentType, on_delete=models.PROTECT, verbose_name="Tipo de Documento"
    )
    number_id = models.IntegerField()
    company = models.CharField(max_length=100)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "Customer"
        verbose_name_plural = "Customers"
        ordering = ["id"]


class SentEmail(models.Model):
    subject = models.CharField(max_length=255)
    message = models.TextField()
    recipients = models.TextField()
    sent_date = models.DateTimeField(auto_now_add=True)