// Random Address Generator (Homework 2 - class 3)

var number = [1, 42, 353, 34, 5, 65, 6, 34, 5253, 8, 90, 84, 9284, 119]
var street = ["Bottles St.", "Paper Pl.", "Riley Rd.", "Laura Ln.", "Chestnut Ct.", "Astor Ave.", "Miley Hwy.", "Supercalafragilisticexpealodocious St.", "Antidisestablishmentarianism St."]
var city = ["Boston, MA", "New York, NY", "Chicago, IL", "Denver, TX", "Austin, TX", "Arlington, TX", "Worcester, MA", "San Francisco, CA", "Portland, OR"]
var zip = [02111, 90210, 99999, 00000, 02035, 57839, 38288, 88294, 21190, 19323, 92999]

for (i = 0; i < number.length; i++){
	var where = number[Math.floor(Math.random() * number.length)];
	//console.log(where);
}
for (i = 0; i < street.length; i++){
	var are = street[Math.floor(Math.random() * street.length)];
	//console.log(are);
}
for (i = 0; i < city.length; i++){
	var you = city[Math.floor(Math.random() * city.length)];
	//console.log(you);
}
for (i = 0; i < zip.length; i++){
	var located = zip[Math.floor(Math.random() * zip.length)];
	//console.log(located);
}

var address = where + " " + are + " " + you + " " + located

console.log(address)