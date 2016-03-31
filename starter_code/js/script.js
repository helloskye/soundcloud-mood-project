// ==========================
//
//         Soundmood
//
// ==========================


// ==============================
//
//   Initialize Soundcloud API
//
// ==============================

//
// # Initialize the Soundcloud API client with our client ID
//
SC.initialize({
  client_id: 'b43329eb065d6257f4349dc3daf1c426'
});



// ===========================
//
//        Document ready
//
// ===========================
//
// # Document ready
//
// $(document).ready() runs once the page DOM is ready for JavaScript
// to execute. A page can't be manipulated safely until the document is ready.
//
$(document).ready(function() {
  // Add click handlers to 'go' and 'random' buttons here.
  $("#go").click(function() {
    goClicked();
  });
  
  $("#random").click(function() {
    randomClicked();
  });
});


// ======================================
//
//    Play a song for the user's mood
//
// ======================================

//
// # 'Go' button click handler
//
// 1. Get the user's mood from the form
// 2. Search Soundcloud for a song for the mood
// 3. Update jumbotron #moodstatus to dipsplay the mood
//
function goClicked() {
  // TODO: fill this out
  var mood = $("#mood").val();
  searchTracks(mood);
  updateJumboTron(mood);
}

//
// # Search soundcloud tracks
//
// 1. Search soundcloud using the Soundcloud API to find a song that
// matches the user's mood.
// 2. Play the song
// 3. Update jumbotron #songtitle to display the song title
//
// * **mood**, the user's mood.
//
function searchTracks(mood) {
  // TODO: fill this out
  playTrack(mood);
  SC.get(
          '/tracks',{genre:mood, license:'cc-by-sa'}).then(function(tracks) {
               var index = Math.floor(Math.random()*tracks.length);
               var track = tracks[index];
                console.log(track);
            }
        );
  }

//
// # Play a track
//
// Play a Soundcloud track.
// If there is already a song playing, stop that song first.
//
// Use 'currentSong' to keep track of the song that is playing.
//
// * **trackid**, the ID of the track to play.
//
var currentSong = null; // The song that is currently playing
function playTrack(trackid) {
  if (currentSong != null) {
    // TODO: stop the current song
    window.player.pause();
  }
  // TODO: stream the track based on the given id and update 'currentSong'.
  SC.stream('/tracks/' + trackid).then(function(player)
  {
   window.player = player;
    console.log(player);
    player.play();
    //player.setVolume(1);
  }
  );
  }


//
// # Update Jumbotron
//
// Updates the header text to show the user's mood.
// (Optional: change the jumbotron's color)
//
// * **mood**, the user's mood
//
function updateJumboTron(mood) {
  $('#moodstatus').text('It sounds like you are in ' + mood +  ' mood!!');
}


// =======================
//
//      Randomization
//
// =======================


//
// # 'Random' button click handler
//
// Pick a mood at random from moodList and find a track for that mood.
//
function randomClicked() {
  // TODO: fill this out
var mood = randomMood();
searchTracks(mood);
updateJumboTron(mood);
}

//
// # Random Mood
//
// Returns a random mood from moodList.
//
// TODO: add moods to this list
var moodList = ["happy", "sad", "kirby", "angry" , "generous"];
function randomMood() {
  // TODO: fill this out
  var moodNum = Math.floor(Math.random()*moodList.length)
  var mood = moodList[moodNum];
  return mood;
}



// ========================
//
//     BONUS CHALLENGES
//
// ========================

//
// 1. Change the color of the jumbotron to fit the given mood.
//
// 2. Add a typeahead to the input field that shows the moods in our mood array.
//

//
// 1. Change jumbotron color!
//
//
// # Change the color of the jumbotron
//
// Update the background-color of the jumbotron using jQuery
//
// * **color**, the color to change to
//
function changeColor(color) {
  // TODO: fill this out
}

//
// # Get the mood color
//
// 1. Choose a color for the given mood and return it
// ex. If 'happy', then return '#fffff' (white)
// 2. Make sure to return a default color
//
// * **mood**, the user's mood
//
// * returns a color's hex code
//
function getColor(mood) {
  // TODO: fill this out
}


//
// 2. Typeahead
//
// Add a typeahead to the mood input field using the moodList as a source.
//
