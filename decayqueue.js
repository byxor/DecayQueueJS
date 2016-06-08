function DecayQueue(lifetime)
{
	this.list = [];
	this.times = [];
	
	this.lifetime = lifetime;
};

/* ##################################################
 * # DON'T CALL THESE PLEASE.                       #
 * ################################################*/

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

/* ##################################################
 * # Methods you should care about.                 #
 * ################################################*/

DecayQueue.prototype.update = function()
{
	var decayCount = this.__countDecayed();
	
	for (var i = 0; i < decayCount; i++)
		this.dequeue();
};

DecayQueue.prototype.enqueue = function(element)
{
	this.list.push(element);
	this.times.push(Date.now());
};

DecayQueue.prototype.dequeue = function()
{
	var element = this.list[0];	
	
	this.list.splice(0, 1);
	this.times.splice(0, 1);
	
	return element;
};

DecayQueue.prototype.peek = function()
{
	var element = this.list[0];
	return element;	
};

DecayQueue.prototype.isEmpty = function()
{
	return this.list.length <= 0;
};

DecayQueue.prototype.getLength = function()
{
	return this.list.length;
};


