# ~ DecayQueueJS ~

## What is it?

##### Normal Queue
* Works on a **First in, first out** basis.
* Great for processing things in a **First come, first served** manner.
* Is a fantastic data structure.

##### Decay Queue
* Is a normal queue _(with a bit extra)_.
* Elements are **automatically removed** if they sit there too long.
* You can specify how long you want the queue to hold its elements.

## Installation
There are 2 ways to include it in your HTML file.

1. Download a copy...
```html
<script src="decayqueue.js"></script>
```

2. Or link to the latest copy on github...
```html
<script src="https://raw.githubusercontent.com/byxor/DecayQueueJS/master/decayqueue.js"></script>
```

## Scenario where it's useful

Imagine you're programming a game of pacman and you want to allow the player to move around fluidly. A beginner programmer may just check the directional input once, then throw it away if turning is impossible.

Maybe you're a little smarter and your gut instinct tells you to use a queue to store the directional input. You'd do this so that pacman will turn at the next available point if the direction is pressed a little bit early.

This is an improvement, **but there are some problems**.

What would happen if you hit 20 directional buttons really fast, then just watched it? **Think about it.**  
_I'll give you 5 seconds to think about it..._

Pacman would make 20 successive turns whenever possible. Any further input would be rendered **useless** during the time that pacman was busy turning around and responding to those 20 commands. To make things worse, if pacman got stuck due to invalid input, he'd never be able to move again. Obviously you could just hard-code a fix to this but when you're making dirty fixes like that, you know there's a better way.

Now imagine you chose a DecayQueue instead and gave it a lifetime of 500 milliseconds...

Now pacman can...
* Respond and react to early input.
* Disregard input that was given over 500ms ago.
* Not get stuck in corners.

A simple swap to a DecayQueue fixes the majority of the problems.

.  
.  
.  
.  
.  
.  
.  

# - - - - - - Documentation - - - - - -

## Tips
* Never access the properties directly, it's a bad idea.
* If something has leading underscores, stay away.
* Always update the queue before you read from it.



## DecayQueue(lifetime)

Constructor function.  
```javascript
var lifetime = 1000;
var dq = new DecayQueue(1000);
...
```  
**Parameters:**  
*lifetime* : The number of milliseconds to keep an element after it has been inserted.



## DecayQueue.enqueue(element)
Adds an element to the back of the queue.  
```javascript
...
var tempString = "I'm going into the queue!";
dq.enqueue(tempString);
```  
**Parameters:**  
*element* : The thing you want to put into the queue.



## DecayQueue.dequeue()
Removes the element from the front of the queue and returns it.  
```javascript
...
dq.enqueue("Thing at front");
dq.enqueue("Thing in middle");
dq.enqueue("Thing at back");

console.log(dq.dequeue());	// Prints "Thing at front"
console.log(dq.dequeue());	// Prints "Thing in middle"
```


## DecayQueue.peek()
Returns the element at the front without removing it.  
```javascript
...
dq.enqueue("Thing at front");
dq.enqueue("Thing in middle");
dq.enqueue("Thing at back");

console.log(dq.peek());	// Prints "Thing at front"
console.log(dq.peek());	// Prints "Thing at front"
```



## DecayQueue.isEmpty()
Returns true if the queue is empty.  
```javascript
var dq = new DecayQueue(1000);

console.log(dq.isEmpty());	// Prints "true"
dq.enqueue("Something");
console.log(dq.isEmpty());	// Prints "false"
```



## DecayQueue.getLength()
Returns the length of the queue.  
```javascript
var dq = new DecayQueue(1000);

dq.enqueue("Foo");
dq.enqueue("Bar");

console.log(dq.getLength());	// Prints "2"
```



## DecayQueue.blast()
Remove all elements in the queue.  
```javascript
var dq = new DecayQueue(1000);

dq.enqueue("Foo");
dq.enqueue("Bar");

console.log(dq.getLength());	// Prints "2"

dq.blast();

console.log(dq.getLength());	// Prints "0"

```