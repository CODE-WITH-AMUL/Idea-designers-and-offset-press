from django.db import models



class Order(models.Model):
    firstname = models.CharField( max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    location = models.CharField(max_length=100)
    product = models.CharField(max_length=100)
    quanity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"The Product {self.product} was ordered by {self.firstname} {self.lastname} on {self.created_at}"
    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'
        ordering = ['-created_at']