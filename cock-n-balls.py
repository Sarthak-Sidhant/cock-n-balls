import math

def calculate_volume():
    cock_cylinder_length = float(input("Enter Cock Cylinder Length (in inches): "))
    cock_circumference = float(input("Enter Cock Circumference (in inches): "))
    ball_diameter = float(input("Enter Ball Diameter (in inches): "))

    cock_radius = cock_circumference / (2 * math.pi)
    cock_cone_volume = (1 / 3) * math.pi * cock_radius * cock_radius * cock_cylinder_length
    cock_cylinder_volume = math.pi * cock_radius * cock_radius * cock_cylinder_length
    ball_radius = ball_diameter / 2
    ball_volume = (4 / 3) * math.pi * ball_radius * ball_radius * ball_radius

    total_volume = cock_cone_volume + cock_cylinder_volume + 2 * ball_volume
    print(f"Total Volume: {total_volume:.2f} cubic inches")

    if total_volume > 100:
        print("Wow, you've got a big one!")
    elif total_volume < 50:
        print("Don't worry, size doesn't matter!")
    else:
        print("You're just right!")

calculate_volume()
