from django.db import models

class Pizza(models.Model):
    size = models.CharField(max_length=5)
    topping1 = models.CharField(max_length=64, default=None)
    topping2 = models.CharField(max_length=64, default=None)
    topping3 = models.CharField(max_length=64, default=None)
    done = models.BooleanField()

    def __str__(self):
        if topping3 != None:
            return f"{self.size} pizza w/ {this.topping1}, {this.topping2}, {this.topping3}"
        elif topping2 != None:
            return f"{self.size} pizza w/ {this.topping1}, {this.topping2}"
        return f"{self.size} pizza w/ {this.topping1}, {this.topping2}, {this.topping3}"

class Toppings(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.name}"
