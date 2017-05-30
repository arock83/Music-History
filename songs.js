console.log("songs.js loaded");


var songs = [];
var songs2 = [];

//CODE FROM PREVIOUS VERSION OF MUSIC HISTORY

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.push("Smile Like You Mean It > by The Killers on the album Hot Fuss");
// songs.unshift("Everybody Talks > by Neon Trees on the album Picture Show");

// var song1 = document.getElementById("song1");
// var song2 = document.getElementById("song2");
// var song3 = document.getElementById("song3");
// var song4 = document.getElementById("song4");


// for (n=0; n<songs.length; n+=1) {
// 	songs[n]=songs[n].replace(/[@*!()]/gi, '');
// 	songs[n]=songs[n].replace(/ > /gi, ' - ');
// }

// function populateList() {
// 	song1.innerHTML = songs[0];
// 	song2.innerHTML = songs[1];
// 	song3.innerHTML = songs[2];
// 	song4.innerHTML = songs[3];
// }

// populateList();

//Vanilla JS XHR Requests

// var musicLoader = new XMLHttpRequest();
// var musicLoader2 = new XMLHttpRequest();
// var mainSection = document.getElementById("main-section");

// musicLoader.addEventListener("load", function (event) {
// 	//console.log("parsed data", JSON.parse(this.responseText));
// 	songs = JSON.parse(this.responseText).song;
// 	populateList(songs);
// });
// musicLoader2.addEventListener("load", function (event) {
// 	songs2 = JSON.parse(this.responseText).song;

// })
// musicLoader.addEventListener("error", () => {
// 	console.log("there was an error loading songs.json");
// })
// musicLoader2.addEventListener("error", () => {
// 	console.log("there was an error loading songs2.json");
// })

// musicLoader.open("GET", "songs.json");
// musicLoader2.open("GET", "songs2.json");
// musicLoader.send();
// musicLoader2.send();

//AJAX Requests

let musicLoader = () => {
	$.ajax({
		url: "songs.json",
		success: function(data){
			songs = data.song;
			console.log(data);
			populateList(songs);
		}
	});
};
musicLoader();

let musicLoader2 = () => {
	$.ajax({
		url: "songs2.json",
		success: function(data) {
			songs2 = data.song;

		}
	});
};
musicLoader2();

function populateList(array) {
	$("#main-section").html("");
	for (n=0; n<array.length;n+=1) {
		$("#main-section").append( `<div id="song--${n}">
									<h2>`+array[n].name+`</h2>
									<p>`+array[n].artist+`</p>
									<p class="dividers">`+array[n].album+`</p>
									<p>`+array[n].genre+`</p>
									<button id="delete--${n}">Delete</button>
								</div>`);
	}
	$("#main-section").append(`<button id="moreBtn">More ></button>`);
	activateListeners(array);
};

function activateListeners(array) {
	for (let i=0;i<array.length;i+=1) {
		$(`#delete--${i}`).on("click", function() {
			console.log(array);
			array.splice(i, 1);
			console.log(array);
			populateList(array);
		});
	};
	$("#moreBtn").on("click", (event) => {
		console.log(event);
		array = array.concat(songs2);
		populateList(array);
	});
};

//Vanilla Event Listeners

// function activateListeners(array) {
// 	for (let i=0;i<array.length;i+=1) {
// 		let deleteBtn = document.getElementById(`delete--${i}`);
// 		deleteBtn.addEventListener("click", function() {
// 			console.log(array);
// 			array.splice(i, 1);
// 			console.log(array);
// 			populateList(array);
// 		})
// 	}
// 	var moreBtn = document.getElementById("moreBtn");
// 	moreBtn.addEventListener("click", (event) => {
// 		console.log(event);
// 		array = array.concat(songs2);
// 		populateList(array);
// 	})
// }

//Vanilla DOM selectors

// var listMusic = document.getElementById("listMusic");
// var addMusic = document.getElementById("addMusic");
// var addView = document.getElementById("addView");
// var mainAside = document.getElementById("main-aside");
// var mainSection = document.getElementById("main-section");
// var addMusicBtn = document.getElementById("addMusicBtn");
// var inputSongName = document.getElementById("inputSongName");
// var inputSongArtist = document.getElementById("inputSongArtist");
// var inputSongAlbum = document.getElementById("inputSongAlbum");



$("#listMusic").click(function() {
	console.log("click event fired.");
	$("#main-aside").removeClass("hidden");
	$("#main-section").removeClass("hidden");
	$("#addView").addClass("hidden");
});

$("#addMusic").click((event) => {
	$("#main-aside").addClass("hidden");
	$("#main-section").addClass("hidden");
	$("#addView").removeClass("hidden");
});

$("#addMusicBtn").on("click", () => {
	var newSong={};
	newSong.name = $("#inputSongName").val();
	newSong.artist = $("#inputSongArtist").val();
	newSong.album = $("#inputSongAlbum").val();
	newSong.genre = $("#inputSongGenre").val();
	songs.unshift(newSong);
	populateList(songs);
	$("#main-aside").removeClass("hidden");
	$("#main-section").removeClass("hidden");
	$("#addView").addClass("hidden");

});

// addMusicBtn.addEventListener("click", (event) => {
// 	var newSong = inputSongName.value+" by "+inputSongArtist.value+" on the Album "+inputSongAlbum.value;
// 	songs.unshift(newSong);
// 	populateList();
// })