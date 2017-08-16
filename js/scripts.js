var vowelArray = ["a","e","i","o","u","y"];
var Consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
var ayArray=["ay"];
var word = [];

function pigLatinSorting (pigUserInputJs) {
  var lowerCasePigUserInputJs = PigUserInputJs.toLowerCase();
  var word = lowerCasePigUserInputJs.split(" ");
  var firstChar = word.charAt(0);
  if (firstChar === vowelArray[0] || firstChar === vowelArray[1] || firstChar === vowelArray[2] || firstChar === vowelArray[3] || firstChar === vowelArray[4] || firstChar === vowelArray[5]) {
    word = word.concat(ayArray);
  }



  // var cutword = word.stubstr(1, word.length-1);
  // text above is to cut the word


}




$(document).ready (function () {
  $("form#pig-latin").submit (function (event) {
  event.preventDefault();
  var pigUserInputJs = $("input#pigUserInput").val();
  $(".pig-output").text(pigUserInputJs);
  $(".pig-output2").text(word);
  // alert(pigUserInputJs);

  });
});
