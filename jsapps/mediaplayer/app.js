var playlist = new Playlist();

var song1 = new Song('Love Me Like You do', 'Ellie', '4.06');
var song2 = new Song('Shape Of You', 'Ed Sheeran', '3.42');

playlist.add(song1);
playlist.add(song2);

var listElm = document.getElementById('playlist');
playlist.renderIn(listElm);

// Catch event handler selectors
var playBtn = document.getElementById('play');
var nextBtn = document.getElementById('next');
var stopBtn = document.getElementById('stop');

// Listen to the user action events
playBtn.onclick = function() {
	playlist.play();
	playlist.renderIn(listElm);
};
nextBtn.onclick = function() {
	playlist.next();
	playlist.renderIn(listElm);
};
stopBtn.onclick = function() {
	playlist.stop();
	playlist.renderIn(listElm);
};
