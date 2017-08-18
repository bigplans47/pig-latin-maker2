var vowelArray = ["a","e","i","o","u","y"];
var Consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
var ayArray=["ay"];
var word = [];

var pigLatinSorting = function (pigUserInputJs) {
  var lowerCasePigUserInputJs = pigUserInputJs.toLowerCase();
  word = lowerCasePigUserInputJs.split(" ");
  alert(word);
  var arrayWithWords = word[0];
  var firstChar = arrayWithWords[0]

  if (firstChar === vowelArray[0] || firstChar === vowelArray[1] || firstChar === vowelArray[2] || firstChar === vowelArray[3] || firstChar === vowelArray[4] || firstChar === vowelArray[5]) {
    word = word.concat(ayArray);
    alert(arrayWithWords[0]);
  }



  // var cutword = word.stubstr(1, word.length-1);
  // text above is to cut the word


}
console.log();



$(document).ready (function () {
  $("form#pig-latin").submit (function (event) {
  event.preventDefault();
  var pigUserInputJs = $("input#pigUserInput").val();
  $(".pig-output").text(pigUserInputJs);
  var outputFromJS = pigLatinSorting(pigUserInputJs);
  $(".pig-output2").append(outputFromJS);
  // alert(pigUserInputJs);

  });
});
