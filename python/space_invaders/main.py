import turtle
import os
import math
import random

#set up the screen
wn = turtle.Screen()
wn.bgcolor("pink")
wn.bgpic("flowerstand.gif")
wn.title("Flower Stand")
turtle.setup(650, 650)
turtle.screensize(600, 600)

#register shapes
turtle.register_shape("girl.gif")
turtle.register_shape("flower.gif")
turtle.register_shape("wasp.gif")

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

#Set the score to 0
score = 0

#draw the score
score_pen = turtle.Turtle()
score_pen.speed(0)
score_pen.color("white")
score_pen.penup()
score_pen.setposition(-275, 250)
scorestring = "Score: %s" %score
score_pen.write(scorestring, False, align="left", font=("Arial", 14, "normal"))
score_pen.hideturtle()

# Create the player turtle
player = turtle.Turtle()
player.color("white")
player.shape("girl.gif")
player.penup()
player.speed(0)
player.setposition(0, -225)
player.setheading(90)

#player move
playerspeed = 25

number_of_enemies = 5
enemies = []
 
for i in range(number_of_enemies):
  enemies.append(turtle.Turtle())

for enemy in enemies:
  enemy.color("red")
  enemy.shape("wasp.gif")
  enemy.penup()
  enemy.speed(0)
  x = random.randint(-200, 100)
  y = random.randint(100, 150)
  enemy.setposition(x, y)

enemyspeed = 2

#Create the player's bullet
bullet = turtle.Turtle()
bullet.color("pink")
bullet.shape("flower.gif")
bullet.penup()
bullet.speed(0)
bullet.setheading(90)
bullet.shapesize(.07, 0.7)
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
    os.system("afplay woosh.wav&")
    bulletstate = "fire"
    #Move the bullet to just above the player
    x = player.xcor()
    y = player.ycor() +10
    bullet.setposition(x, y)
    bullet.showturtle() 

def isCollision(t1, t2):
  distance = math.sqrt(math.pow(t1.xcor() - t2.xcor(), 2) + math.pow(t1.ycor()-t2.ycor(), 2)) 
  if distance < 15:
    return True
  else:
    return False


def move_right():
  x = player.xcor()
  x += playerspeed
  if x > 280:
    x = 280
  player.setx(x)

def pause():
  # paused = True
  # if paused == True:
  #   turtle.done()
  #   paused = False
  # if paused == False:
  turtle.done()

# def go():




  

#Create keyboard bindings
turtle.listen()
turtle.onkey(move_left, "Left")
turtle.onkey(move_right, "Right")
turtle.onkey(fire_bullet, "space")

turtle.onkey(pause, "p")


#main game loop
while True:

  
  for enemy in enemies: 
    #move enemy
    x = enemy.xcor()
    x += enemyspeed
    enemy.setx(x)

    # reverse move enemy
    if enemy.xcor() > 230:
      for e in enemies:
        y = e.ycor()
        y -= 40
        e.sety(y)
      enemyspeed *= -1

    if enemy.xcor() < -230:
      for e in enemies: 
        y = e.ycor()
        y -= 40
        e.sety(y)
      enemyspeed *= -1


      #hide enemy turtle and bullet when both touch
    if isCollision(bullet, enemy):
      #reset the bullet
      os.system("afplay point.wav&")
      bullet.hideturtle()
      bulletstate = "ready"
      bullet.setposition(0, -400)
      #Reset the enemy
      x = random.randint(-200, 200)
      y = random.randint(100, 250)
      enemy.setposition(x, y)

      score += 10
      scorestring = "Score: %s" %score
      score_pen.clear()
      score_pen.write(scorestring, False, align="left", font=("Arial", 14, "normal"))
    
    if isCollision(player, enemy):
      player.hideturtle()
      enemy.hideturtle()
      print("Game Over")
      break

  
  #game pause
 

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