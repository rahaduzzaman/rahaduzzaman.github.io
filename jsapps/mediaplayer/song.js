function Song(title, artist, duration) {
	this.title = title;
	this.artist = artist;
	this.duration  = duration;
	this.playing = false;
}

Song.prototype.play = function() {
	this.playing = true;
};

Song.prototype.stop = function() {
	this.playing = false;
};

Song.prototype.toHTML = function() {
	var htmlString  = '<li ';
	if (this.playing === true) {
		htmlString  += 'class="current"';
	}
	htmlString  += '>';
	htmlString  += this.title +' - '+ this.artist +'<span class="duration">'+this.duration+'</span>';
	htmlString  += '</li>';

	return htmlString;
};