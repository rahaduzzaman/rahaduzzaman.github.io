function Song(title, artist, duration) {
	Media.call(this, title, duration); //Get the media constructor property to the Song Constructor
	this.artist = artist;
}
// Inherit the media function properties to the Song
Song.prototype = Object.create(Media.prototype); 

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