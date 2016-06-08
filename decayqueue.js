function DecayQueue(lifetime)
{
	this.list = [];
	this.times = [];
	
	this.lifetime = lifetime;
};

DecayQueue.prototype.__hasDecayed = function(i)
{
	var decayTime = this.times[i] + this.lifetime;
	return Date.now() >= decayTime;
};

DecayQueue.prototype.__countDecayed = function()
{
	var decayCount = 0;
	
	for (var i = 0; i < this.list.length; i++)
	{
		if (this.__hasDecayed(i))
			decayCount++;
		else
			break;		
	}
	
	return decayCount;
};

// Call me to update the current state of the queue to its correct state.
DecayQueue.prototype.removeDecayed = function()
{
	var decayCount = this.__countDecayed();
	
	for (var i = 0; i < decayCount; i++)
		this.pop();
};

DecayQueue.prototype.push = function(element)
{
	this.list.push(element);
	this.times.push(Date.now());
};

// DOES NOT RETURN ANYTHING, JUST REMOVES FRONT ELEMENT.
DecayQueue.prototype.pop = function()
{
	this.list.splice(0, 1);
	this.times.splice(0, 1);
};

// DOES NOT REMOVE FRONT ELEMENT, JUST RETURNS IT.
DecayQueue.prototype.read = function()
{
	var element = this.list[0];
	return element;	
};

DecayQueue.prototype.isEmpty = function()
{
	return this.list.length <= 0;
};

