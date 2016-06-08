function DecayQueue(lifetime)
{
	this.__list = [];
	this.__times = [];
	
	this.__lifetime = lifetime;
};

/* ##################################################
 * # DON'T CALL THESE PLEASE.                       #
 * ################################################*/

DecayQueue.prototype.__hasDecayed = function(i)
{
	var decayTime = this.__times[i] + this.__lifetime;
	return Date.now() >= decayTime;
};

DecayQueue.prototype.__countDecayed = function()
{
	var decayCount = 0;
	
	for (var i = 0; i < this.__list.length; i++)
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
	this.__list.push(element);
	this.__times.push(Date.now());
};

DecayQueue.prototype.dequeue = function()
{
	var element = this.__list[0];	
	
	this.__list.splice(0, 1);
	this.__times.splice(0, 1);
	
	return element;
};

DecayQueue.prototype.peek = function()
{
	var element = this.__list[0];
	return element;	
};

DecayQueue.prototype.isEmpty = function()
{
	return this.__list.length <= 0;
};

DecayQueue.prototype.getLength = function()
{
	return this.__list.length;
};

DecayQueue.prototype.blast = function()
{
	for (var i = 0; i < this.__list.length; i++)
		this.dequeue();
};

DecayQueue.prototype.get = function(i)
{
	return this.__list[i];
};

