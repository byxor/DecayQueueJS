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

Your gut instinct is to go for a queue to store the directional input. You'd do this so that pacman will turn at the next available point if the direction is pressed a little bit early.

This is a nice solution, **but there is a problem**.


Have you ever wanted to program a game, but you have no idea how to store user input and process it in the order that it arrived? Well, a great data structure for that is a queue. But sometimes a queue isn't enough. Maybe you want to add a lifetime onto the input so that if it hasn't been processed after a duration, it'll be removed.

# How would I use it?