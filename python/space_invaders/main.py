import turtle
import os

#set up the screen
wn = turtle.Screen()
wn.bgcolor("purple")
wn.title("Flower Planters")

#Draw Border
border_pen = turtle.Turtle()
border_pen.speed(0)
border_pen.color("white")
border_pen.penup()
border_pen.setposition(-300,-300)
border_pen.pendown()
border_pen.pensize(3)
for side in range(4):
  border_pen.fd(600)
  border_pen.lt(90)
border_pen.hideturtle()


# Create the player turtle
player = turtle.Turtle()
player.color("white")
player.shape("circle")
player.penup()
player.speed(0)
player.setposition(0, -250)
player.setheading(90)

#player move
playerspeed = 25

#Create the enemy
enemy = turtle.Turtle()
enemy.color("red")
enemy.shape("circle")
enemy.penup()
enemy.speed(0)
enemy.setposition(-200, 250)


enemyspeed = 2

#Create the player's bullet
bullet = turtle.Turtle()
bullet.color("yellow")
bullet.shape("triangle")
bullet.penup()
bullet.speed(0)
bullet.setheading(90)
bullet.shapesize(.05, 0.5)
bullet.hideturtle()

bulletspeed = 20

#Define bullet state
#ready - ready to fire
#fire - bullet is firing
bulletstate = "ready"

def move_left():
  x = player.xcor()
  x -= playerspeed
  if x < -280:
    x = -280
  player.setx(x)

def fire_bullet():
  #declare bulletstate as global if it needs changed
  global bulletstate
  if bulletstate == "ready":
    bulletstate = "fire"
    #Move the bullet to just above the player
    x = player.xcor()
    y = player.ycor() +10
    bullet.setposition(x, y)
    bullet.showturtle() 

def move_right():
  x = player.xcor()
  x += playerspeed
  if x > 280:
    x = 280
  player.setx(x)

#Create keyboard bindings
turtle.listen()
turtle.onkey(move_left, "Left")
turtle.onkey(move_right, "Right")
turtle.onkey(fire_bullet, "space")

#main game loop
while True:
  #move enemy
  x = enemy.xcor()
  x += enemyspeed
  enemy.setx(x)

  # reverse move enemy
  if enemy.xcor() > 280:
    y = enemy.ycor()
    y -= 40
    enemyspeed *= -1
    enemy.sety(y)

  if enemy.xcor() < -280:
    y = enemy.ycor()
    y -= 40
    enemyspeed *= -1
    enemy.sety(y)

  #move the bullet
  # if bulletstate == "fire":
  y = bullet.ycor()
  y += bulletspeed
  bullet.sety(y)

  #check to see if the bullet has gone to the top
  if bullet.ycor() > 275:
    bullet.hideturtle()
    bulletstate = "ready"


delay = raw_input("Press enter to finish.")