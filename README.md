# DecayQueueJS
A queue that only holds elements for a specified duration.

# What is it?
Queues are a nifty data structure that work on one simple principle... **First In, First Out.**

You simply put elements on the back of the queue, and take them from the front of the queue. It's a great way of processing things in a "first come, first served" manner.

Normal queues are fantastic, but sometimes we need more.

A DecayQueue is a normal queue, but with one extra property... A _lifetime_. 
In a DecayQueue, the elements will automatically be removed if they've been there longer than the specified lifetime of the queue.

It's as simple as that!

# Why would I need it?





Imagine you're programming a game of pacman and you want to allow the player to move around fluidly. A beginner programmer may just check the directional input once, then throw it away if turning is impossible.

Maybe you're a little smarter and your gut instinct tells you to use a queue to store the directional input. You'd do this so that pacman will turn at the next available point if the direction is pressed a little bit early.

This is a nice solution, **but there is a problem**.



# How would I use it?