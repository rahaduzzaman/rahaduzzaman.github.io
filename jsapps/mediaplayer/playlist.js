function Playlist() {
	this.songs = [];
	this.playingIndex = 0;
}

Playlist.prototype.add = function(song) {
	this.songs.push(song);
};

Playlist.prototype.play = function() {
	var presentSong = this.songs[this.playingIndex];
	presentSong.play();
};

Playlist.prototype.stop = function(){
	var presentSong = this.songs[this.playingIndex];
	presentSong.stop();
};

Playlist.prototype.next = function() {
	this.stop();
	this.playingIndex++;
	if (this.playingIndex === this.songs.length) {
		this.playingIndex = 0;
	}
	this.play();
};

Playlist.prototype.renderIn = function(list) {
 	list.innerHTML = "";
 	for(var i = 0; i < this.songs.length; i++) {
 		// console.log(this.songs[i]);
 		list.innerHTML += this.songs[i].toHTML();
 	}
};