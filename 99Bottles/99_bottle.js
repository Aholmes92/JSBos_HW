// 99 Bottles (Homework 2 - Class 3)

// For loop starting at 99 and counting down
for (beer = 99; beer > 0; beer--){
// Setting variable to subtract 1 after the console.logs
	empty = beer - 1;
// If statements to print lyrics down to one
	if (beer > 1){
		console.log(beer + " " + "bottles of beer on the wall,");
		console.log(beer + " " + "bottles of beer");
		console.log("Take one down, pass it around...");
		console.log(empty + " " + "bottles of beer on the wall");
	}
	else if (beer <= 1){
		console.log(beer + " " + "bottle of beer? No Mo Beahs!");
	}
}

