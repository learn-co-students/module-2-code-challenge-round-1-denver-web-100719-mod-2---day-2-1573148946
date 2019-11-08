# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
power1 = Power.create(name: "Heat Vision", description: "Blazing Rays like unto the Sun")
power2 = Power.create(name: "Invisibility", description: "Great for Introverts")
power3 = Power.create(name: "Super Strength", description: "Start a Moving Company")
power4 = Power.create(name: "Mind Reading", description: "Things You Don't Want to Know")

Heroine.create(name: "Sally Something", super_name: "Face Melter", power: power1)
Heroine.create(name: "Nancy Nobody", super_name: "The Spectre", power: power2)
Heroine.create(name: "Jane Doe", super_name: "Crushinator", power: power3)
Heroine.create(name: "Vera Vicarious", super_name: "Ms. Mental", power: power4)
Heroine.create(name: "Denice Denial", super_name: "Fire Starter", power: power1)
Heroine.create(name: "Gina Gone", super_name: "The Ghost", power: power2)