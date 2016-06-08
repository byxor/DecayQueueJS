var lifetime = 2000;
var inputQueue = new DecayQueue(lifetime);

function setup()
{
	frameRate(30);
	createCanvas(windowWidth*0.98, 40);
	
	fill(255, 255, 255);
	textSize(30);
}

function draw()
{
	inputQueue.update();
	
	background(60, 60, 255);
	
	for (var i = 0; i < inputQueue.getLength(); i++)
	{
		var input = inputQueue.get(i);
		var c = String.fromCharCode(input);
		text(c, 5 + i * 50, 30);
	}
	
}

function keyPressed()
{
	inputQueue.enqueue(keyCode);
}

