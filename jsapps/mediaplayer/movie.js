function Movie(title, year, duration) {
	Media.call(this, title, duration); //Get the media constructor property to the Movie Constructor
	this.year = year; 
}
// Inherit the Media function properties to the Movie
Movie.prototype = Object.create(Media.prototype); 

Movie.prototype.toHTML = function() {
	var htmlString  = '<li ';
	if (this.playing === true) {
		htmlString  += 'class="current"';
	}
	htmlString  += '>';
	htmlString  += this.title +' ('+ this.artist +' ) ' + '<span class="duration">'+this.duration+'</span>';
	htmlString  += '</li>';

	return htmlString;
};