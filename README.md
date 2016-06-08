# - - - Documentation - - -

## Tips
* Never access the properties directly, it's a bad idea.
* 

## DecayQueue()

Constructor function.  
```javascript
var lifetime = 1000
var dq = new DecayQueue(1000);
```  
**Parameters:**  
*lifetime* : The number of milliseconds to keep an element after it has been inserted.

## 

.
.
.
.
.
.

# - - - DecayQueueJS - - -
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

This is an improvement, **but there are some problems**.

What would happen if you hit 20 directional buttons really fast, then just watched it? **Think about it.**  
_I'll give you 5 seconds to think about it..._

Pacman would make 20 successive turns whenever possible. All of your input would be rendered **useless** during the time that pacman was busy turning around and responding to those 20 commands. To make things worse, if pacman got stuck due to invalid input, he'd never be able to move again. Obviously you could just hard-code a fix to this but when you're making dirty fixes like that, you know there's a better way.

Now imagine you chose a DecayQueue instead and gave it a lifetime of 500 milliseconds...

Now pacman can...
* Respond and react to early input.
* Not get caught up following commands from 7 seconds ago.
* Not get stuck in corners.

A simple swap to a DecayQueue fixes the majority of the problems.

# How would I use it?
