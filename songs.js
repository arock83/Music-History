console.log("songs.js loaded");


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Smile Like You Mean It > by The Killers on the album Hot Fuss");
songs.unshift("Everybody Talks > by Neon Trees on the album Picture Show");

var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");


for (n=0; n<songs.length; n+=1) {
	songs[n]=songs[n].replace(/[@*!()]/gi, '');
	songs[n]=songs[n].replace(/ > /gi, ' - ');
}

function populateList() {
	song1.innerHTML = songs[0];
	song2.innerHTML = songs[1];
	song3.innerHTML = songs[2];
	song4.innerHTML = songs[3];
}

populateList();


var listMusic = document.getElementById("listMusic");
var addMusic = document.getElementById("addMusic");
var addView = document.getElementById("addView");
var mainAside = document.getElementById("main-aside");
var mainSection = document.getElementById("main-section");
var addMusicBtn = document.getElementById("addMusicBtn");
var inputSongName = document.getElementById("inputSongName");
var inputSongArtist = document.getElementById("inputSongArtist");
var inputSongAlbum = document.getElementById("inputSongAlbum");


listMusic.addEventListener("click", (event) => {
	mainAside.classList.remove("hidden");
	mainSection.classList.remove("hidden");
	addView.classList.add("hidden");
})

addMusic.addEventListener("click", (event) => {
	mainAside.classList.add("hidden");
	mainSection.classList.add("hidden");
	addView.classList.remove("hidden");
})

addMusicBtn.addEventListener("click", (event) => {
	var newSong = inputSongName.value+" by "+inputSongArtist.value+" on the Album "+inputSongAlbum.value;
	songs.unshift(newSong);
	populateList();
})