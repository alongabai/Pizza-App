from django.db import models

class Pizza(models.Model):
    size = models.CharField(max_length=5)
    topping1 = models.CharField(max_length=64, default=None)
    topping2 = models.CharField(max_length=64, default=None)
    topping3 = models.CharField(max_length=64, default=None)
    done = models.BooleanField()

    def __str__(self):
        if self.topping3:
            return f"{self.size} pizza w/ {self.topping1}, {self.topping2}, {self.topping3}"
        elif this.topping2:
            return f"{self.size} pizza w/ {self.topping1}, {self.topping2}"
        elif this.topping1:
            return f"{self.size} pizza w/ {self.topping1}"
        return f"{self.size} pizza w/ no toppings"

class Toppings(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.name}"
