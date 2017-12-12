var fortuneCookie = [
	'Conquer your fears or they will conquer you',
	'Rivers need springs',
	"Do not fear what you don't known",
	'whenever possible keep it simple'
]
var fortune = function(arr){
	var idx = Math.floor(Math.random()*fortuneCookie.length);
	return fortuneCookie[idx];
}

exports.fortune = fortune;