// Event listener for DOM
document.addEventListener("DOMContentLoaded", theDOMHasLoaded, false);

// array of audio files (stored in a folder called music)
var files = ["Kalimba.mp3", // 0
			"Maid with the Flaxen Hair.mp3", // 1
			"Sleep Away.mp3" // 2
			];

///////////////////////////////////////////////
// Find and store audio info
///////////////////////////////////////////////

// array for AudioObjects
var audioList = [];
// components and the index for their AudioObject
var componentDict = {};
// store AudioObject that is currently playing
var playingAudio = null;
// store playhead id if one is being dragged
var onplayhead = null;

/* AudioObject Constructor */
function AudioObject(audio, duration) {
	this.audio = audio;
	this.id = audio.id;
	this.duration = duration;
}
/* bindAudioPlayer
 * Store audioplayer components in correct AudioObject
 * num identifes correct audioplayer
 */
AudioObject.prototype.bindAudioPlayer = function (num) {
	this.audioplayer = document.getElementById("audioplayer-" + num);
	this.playbutton = document.getElementById("playbutton-" + num);
	this.timeline = document.getElementById("timeline-" + num);
	this.playhead = document.getElementById("playhead-" + num);
	this.timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth
}

/* addEventListeners() */
AudioObject.prototype.addEventListeners = function () {
	this.audio.addEventListener("timeupdate", AudioObject.prototype.timeUpdate, false);
	this.audio.addEventListener("durationchange", AudioObject.prototype.durationChange, false);
	this.timeline.addEventListener("click", AudioObject.prototype.timelineClick, false);
	this.playbutton.addEventListener("click", AudioObject.prototype.pressPlay, false);
	// Makes playhead draggable 
	this.playhead.addEventListener('mousedown', AudioObject.prototype.mouseDown, false);
	window.addEventListener('mouseup', mouseUp, false);
}

/* populateAudioList */
function populateAudioList() {
	var audioElements = document.getElementsByClassName("audio");
	for (i = 0; i < audioElements.length; i++) {
		audioList.push(
			new AudioObject(audioElements[i], 0)
		);
		audioList[i].bindAudioPlayer(i);
		audioList[i].addEventListeners();
	}
}

/* populateComponentDictionary() 
 * {key=element id : value=index of audioList} */
function populateComponentDictionary() {
	for (i = 0; i < audioList.length; i++) {
		componentDict[audioList[i].audio.id] = i;
		componentDict[audioList[i].playbutton.id] = i;
		componentDict[audioList[i].timeline.id] = i;
		componentDict[audioList[i].playhead.id] = i;
	}
}

///////////////////////////////////////////////
// Update Audio Player
///////////////////////////////////////////////

/* durationChange
 * set duration for AudioObject */
AudioObject.prototype.durationChange = function () {
	var ao = audioList[getAudioListIndex(this.id)];
	ao.duration = this.duration;
}

/* pressPlay() 
 * call play() for correct AudioObject
 */
AudioObject.prototype.pressPlay = function () {
	var index = getAudioListIndex(this.id);
	audioList[index].play();
}

/* play() 
 * play or pause selected audio, if there is a song playing pause it
 */
AudioObject.prototype.play = function () {
	if (this == playingAudio) {
		playingAudio = null;
		this.audio.pause();
		changeClass(this.playbutton, "playbutton play");
	}
	// else check if playing audio exists and pause it, then start this
	else {
		if (playingAudio != null) {
			playingAudio.audio.pause();
			changeClass(playingAudio.playbutton, "playbutton play");
		}
		this.audio.play();
		playingAudio = this;
		changeClass(this.playbutton, "playbutton pause");
	}
}

/* timelineClick()
 * get timeline's AudioObject
 */
AudioObject.prototype.timelineClick = function (event) {
	var ao = audioList[getAudioListIndex(this.id)];
	ao.audio.currentTime = ao.audio.duration * clickPercent(event, ao.timeline, ao.timelineWidth);
}

/* mouseDown */
AudioObject.prototype.mouseDown = function (event) {
	onplayhead = this.id;
	var ao = audioList[getAudioListIndex(this.id)];
	window.addEventListener('mousemove', AudioObject.prototype.moveplayhead, true);
	ao.audio.removeEventListener('timeupdate', AudioObject.prototype.timeUpdate, false);
}

/* mouseUp EventListener
 * getting input from all mouse clicks */
function mouseUp(e) {
	if (onplayhead != null) {
		var ao = audioList[getAudioListIndex(onplayhead)];
		window.removeEventListener('mousemove', AudioObject.prototype.moveplayhead, true);
		// change current time
		ao.audio.currentTime = ao.audio.duration * clickPercent(e, ao.timeline, ao.timelineWidth);
		ao.audio.addEventListener('timeupdate', AudioObject.prototype.timeUpdate, false);
	}
	onplayhead = null;
}

/* mousemove EventListener
 * Moves playhead as user drags */
AudioObject.prototype.moveplayhead = function (e) {
	var ao = audioList[getAudioListIndex(onplayhead)];
	var newMargLeft = e.clientX - getPosition(ao.timeline);

  if (newMargLeft >= 0 && newMargLeft <= ao.timelineWidth) {
		document.getElementById(onplayhead).style.marginLeft = newMargLeft + "px";
	}
	if (newMargLeft < 0) {
		playhead.style.marginLeft = "0px";
	}
	if (newMargLeft > ao.timelineWidth) {
		playhead.style.marginLeft = ao.timelineWidth + "px";
	}
}

/* timeUpdate 
 * Synchronizes playhead position with current point in audio 
 * this is the html audio element
 */
AudioObject.prototype.timeUpdate = function () {
	// audio element's AudioObject
	var ao = audioList[getAudioListIndex(this.id)];
	var playPercent = ao.timelineWidth * (ao.audio.currentTime / ao.duration);
	ao.playhead.style.marginLeft = playPercent + "px";
	// If song is over
	if (ao.audio.currentTime == ao.duration) {
		changeClass(ao.playbutton, "playbutton play");
		ao.audio.currentTime = 0;
		ao.audio.pause();
		playingAudio = null;
	}
}

///////////////////////////////////////////////
// Utility Methods
///////////////////////////////////////////////

/* changeClass 
 * overwrites element's class names */
function changeClass(element, newClasses) {
	element.className = newClasses;
}

/* getAudioListIndex
 * Given an element's id, find the index in audioList for the correct AudioObject */
function getAudioListIndex(id) {
	return componentDict[id];
}

/* clickPercent()
 * returns click as decimal (.77) of the total timelineWidth */
function clickPercent(e, timeline, timelineWidth) {
   return (e.clientX - getPosition(timeline)) / timelineWidth;
}

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}
///////////////////////////////////////////////
// GENERATE HTML FOR AUDIO ELEMENTS AND PLAYERS
///////////////////////////////////////////////

/* createAudioElements
 * create audio elements for each file in files */
function createAudioElements() {
	for (f in files) {
		var audioString = "<audio id=\"audio-" + f + "\" class=\"audio\" preload=\"true\"><source src=\"music/" + files[f] + "\"></audio>";
		$("#audio-players").append(audioString);
	}
}

/* createAudioPlayers
 * create audio players for each file in files */
function createAudioPlayers() {

	for ( f = 0; f < files.length; f++ ){ 
	$("#audio-players").append("<h4>" + files[f].slice(0, -4) + "</h4>");
	
	
		var playerString = "<div id=\"audioplayer-" + f + "\" class=\"audioplayer\"><button id=\"playbutton-" + f + "\" class=\"play playbutton\"></button><div id=\"timeline-" + f + "\" class=\"timeline\"><div id=\"playhead-" + f + "\" class=\"playhead\"></div></div></div>";
		$("#audio-players").append(playerString);
	}
}



/* theDOMHasLoaded()
 * Execute when DOM is loaded */
function theDOMHasLoaded(e) {
	// Generate HTML for audio elements and audio players
	createAudioElements();
	createAudioPlayers();

	// Populate Audio List
	populateAudioList();
	populateComponentDictionary();
}