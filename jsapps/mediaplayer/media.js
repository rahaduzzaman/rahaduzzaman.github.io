function Media(title, duration) {
	this.title = title;
	this.duration  = duration;
	this.playing = false;
}

Media.prototype.play = function() {
	this.playing = true;
};

Media.prototype.stop = function() {
	this.playing = false;
};