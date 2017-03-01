'use strict';

var keycode_letters = {
  key_nums: [81,87,69,82,84,89,85,73,79,80,65, 83, 68, 70, 71, 72, 74, 75, 76,90,88,67,86,66,78,77,],//key codes
  key_letters: ['Q','W','E','R','T','Y','U','I','P','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Z','X','C','V','B','N','M'],//array of keys
  key_sounds: [,'sounds/jazz.mp3','sounds/bass1.mp3', 'sounds/sound2.mp3', 'sounds/sound3.mp3'
  , 'sounds/sound4.mp3', 'sounds/sound5.mp3', 'sounds/sound6.mp3'
  , 'sounds/sound7.mp3', 'sounds/sound8.mp3', 'sounds/sound9.mp3'
  , 'sounds/sound10.mp3'],//array of file names for sounds
};

//adds a listener to the page that records keycodes and plays corresponding sounds + vids
window.addEventListener('keydown', keyHandler);
function keyHandler (event) {
  for (var i = 0; i < keycode_letters.key_nums.length; i++) {
    if (event.keyCode === keycode_letters.key_nums[i]) {
      var audio = document.getElementById(event.keyCode.toString());
      console.log(audio);
      var filepath = keycode_letters.key_sounds[i];
      audio.src = filepath;
      audio.play();
      
    }
  }
};






//  var keycode_letters = {
//     key_nums: [65, 83, 68, 70, 71, 72, 74, 75, 76, 186],//key codes
//     key_letters: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],//array of keys
//  -  key_sounds: ['sounds/bass1.mp3', 'sounds/sound2.mp3', 'sounds/sound3.WAV'
//  -  , 'sounds/sound4.WAV', 'sounds/sound5.WAV', 'sounds/sound6.WAV'
//  -  , 'sounds/sound7.WAV', 'sounds/sound8.WAV', 'sounds/sound9.WAV'
//  -  , 'sounds/sound10.WAV'],//array of file names for sounds
//  +  key_sounds: ['sounds/bass1.mp3', 'sounds/sound2.mp3', 'sounds/sound3.mp3'
//  +  , 'sounds/sound4.mp3', 'sounds/sound5.mp3', 'sounds/sound6.mp3'
//  +  , 'sounds/sound7.mp3', 'sounds/sound8.mp3', 'sounds/sound9.mp3'
//  +  , 'sounds/sound10.mp3'],//array of file names for sounds
//   };
  
//   //adds a listener to the page that records keycodes and plays corresponding sounds + vids
//  @-15,9 +15,11 @@ function keyHandler (event) {
//     for (var i = 0; i < keycode_letters.key_nums.length; i++) {
//       if (event.keyCode === keycode_letters.key_nums[i]) {
//         var audio = document.getElementById(event.keyCode.toString());
//      console.log(audio);
//         var filepath = keycode_letters.key_sounds[i];
//         audio.src = filepath;
//         audio.play();
      
//       }
//     }
//   };







// var keycode_letters = {
//   key_nums: [65, 83, 68, 70, 71, 72, 74, 75, 76, 186],//key codes
//   key_letters: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],//array of keys
//   key_sounds: ['sounds/bass1.mp3', 'sounds/sound2.mp3', 'sounds/sound3.WAV'
//   , 'sounds/sound4.WAV', 'sounds/sound5.WAV', 'sounds/sound6.WAV'
//   , 'sounds/sound7.WAV', 'sounds/sound8.WAV', 'sounds/sound9.WAV'
//   , 'sounds/sound10.WAV'],//array of file names for sounds
// };

// //adds a listener to the page that records keycodes and plays corresponding sounds + vids
// window.addEventListener('keydown', keyHandler);
// function keyHandler (event) {
//   for (var i = 0; i < keycode_letters.key_nums.length; i++) {
//     if (event.keyCode === keycode_letters.key_nums[i]) {
//       var audio = document.getElementById(event.keyCode.toString());
//       var filepath = keycode_letters.key_sounds[i];
//       audio.src = filepath;
//       audio.play();
//     }
//   }
// };

  // function removeTransition(event) {
  //   if (e.propertyName !== 'transform') return;
  //   e.target.classList.remove('playing');
  // }
  // function playSound(event) {
  //   var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  //   var key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  //   if (!audio) return;
  //   key.classList.add('playing');
  //   audio.currentTime = 1;
  //   audio.play();
  // }
  // var keys = Array.from(document.querySelectorAll('.key'));
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  // window.addEventListener('keydown', playSound);
