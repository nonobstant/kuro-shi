// for our deterministic random number generator
var a = 1664525;
var c = 1013904223;
var seed = 1234;


//function seedDeterministicRandomNumberGenerator(newSeed) {
function seedDRand(newSeed) {
	seed = newSeed;
	//console.log("seed = " + seed + "\n");
}


function dRandom() {
  // define the recurrence relationship
  seed = parseInt(a * seed + c) % 982451497;
  // return an integer
  // Could return a float in (0, 1) by dividing by m
  return seed;
}


// helper function which returns an integer from 0 to spread - 1
// for 4 it would be 0, 1, 2, or 3 (not 4)
function dRandomInt(spread) {
	return (dRandom() % spread);
}


// returns an integer from min to max (inclusive)
function dRandomIn(min, max) {
	return min + dRandom() % (max - min + 1);
}


// return a float in the 0-1 range
function dRandomFloat() {
	return dRandom() / 982451497;
}


// return a float in the 0-1 range
function dRandomFloatIn(min, max) {
	return min + (max - min) * dRandom() / 982451497;
}


// uses the fibonacci sequence to generate pseudorandom numbers
function fibonacci(a, b) {
	var period = Math.pow(10, 6);
	//console.log("testing fibonacci sequence. inputs are " + a + " and " + b);
	var iterations = 128;
	a += 552219;
	var c;
	for (var i = 0; i < iterations; i ++) {
		c = a + b;
		if (c > period)
			c = c % period;
		a = b;
		b = c;
		//console.log(c);
	}
	return b;
}
