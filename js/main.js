var cookie_visitor = Cookies.get('sugar');
var sugarCount = 0;
var cookie_visitor = Cookies.get('chocolate');
var chocolateCount = 0;
var cookie_visitor = Cookies.get('lemon');
var lemonCount = 0;

function sugarSet() {
	var setSugar = Cookies.set('sugar', sugarCount);
	sugarCount++
	document.getElementById("s_cookies").innerHTML = "Sugar Cookies: " + sugarCount;
}
function chocolateSet() {
	var setChocolate = Cookies.set('chocolate', chocolateCount);
	chocolateCount++
	document.getElementById("c_cookies").innerHTML = "Chocolate Cookies: " + chocolateCount;
}
function lemonSet() {
	var setLemon = Cookies.set('lemon', lemonCount);
	lemonCount++
	document.getElementById("l_cookies").innerHTML = "Lemon Cookies: " + lemonCount;
}
function removeCount() {
	Cookies('sugar', 0);
	document.getElementById("s_cookies").innerHTML = "Sugar Cookies: 0";
	Cookies('chocolate', 0);
	document.getElementById("c_cookies").innerHTML = "Chocolate Cookies: 0";
	Cookies('lemon', 0);
	document.getElementById("l_cookies").innerHTML = "Lemon Cookies: 0";
}