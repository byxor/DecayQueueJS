var lifetime = 1000;
var inputQueue = new DecayQueue(lifetime);

function setup()
{
	frameRate(30);
	createCanvas(600, 600);
}

function draw()
{
	inputQueue.update();
	
	background(255, 255, 255);
	
	
	
	for (var i = 0; i < inputQueue.getLength(); i++)
	{
		var input = inputQueue.peek();
		text(input, 10, (i+4)*15);
	}
	
}

function keyPressed()
{
	inputQueue.enqueue(keyCode);
}

