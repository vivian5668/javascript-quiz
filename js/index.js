var questions = [];
var correctA = [];
var incorrectA = [];
var possibleA = []; //may need to change to null
var questionsh = $('.card-title');
var randomNUm = Math.floor(Math.random() * 4);

var populateCards = function() {
	for (var i = 0; i <questions.length; i++) {
		var question = questions[i]
		$(questionsh[i]).text(question);
	}
}

var index = function(li) {
  var temp = []
  for (var i = 0; i < li.length; i++){
    temp.push([li[i],i])
  }
  temp = temp.sort(function(a,b){return(a[0]-b[0])})
  for (var i = 0; i < temp.length; i++){
    temp[i].push(i)
  }
  temp = temp.sort(function(a,b){return(a[1] - b[1])})
  var output = []
  for (var i = 0; i < temp.length; i++){
    output.push(temp[i][2])
  }
  return(output);
}

var RandomIntArray = function(intN){
  li = []
  for (var i = 0; i < intN; i++){
    li.push(Math.random())
  }
  return(index(li));
}

var getPossibleA = function () {
	for (var i = 0; i < correctA.length; i++) {
		incorrectA[i].push(correctA[i]);
		possibleA.push(incorrectA[i]);
	}
}

var populateAnswers = function () {
	getPossibleA();

	var IntArray = RandomIntArray(4);
	$('#customRadio1').text(possibleA[0][IntArray[0]]);
	console.log(possibleA[0][IntArray[0]])
	$('#customRadio2').text(possibleA[0][IntArray[1]]);
	$('#customRadio3').text(possibleA[0][IntArray[2]]);
	$('#customRadio4').text(possibleA[0][IntArray[3]]);
}

$(document).ready(function() {
	$.get('https://opentdb.com/api.php?amount=9&category=9&difficulty=easy&type=multiple').done(function(data){
		// console.log(data.results[0].question);
		data.results.forEach(function(obj){
			questions.push(obj.question);
			correctA.push(obj.correct_answer);
			incorrectA.push(obj.incorrect_answers);
			
		});
		populateCards();
		populateAnswers();

	});
});















//   $("button").on("click", function() {
//     // e.preventDefault();
//     // console.log("in the click");
//     var searchString = document.forms["imageform"].elements["imagebox"].value;
//     $.get('https://www.reddit.com/search.json', {
//       q: searchString
//     }).done(function(data) {
//       // var results = data.data.children;
//       var results = data.data.children;
//       console.log(data);
//       results.forEach(function(item) {
//         if (item.data.thumbnail !== 'default') {
//           $("#results").append("<img src='" + item.data.thumbnail + "'>");
//         }
//       });

//     });
//   });
// });
