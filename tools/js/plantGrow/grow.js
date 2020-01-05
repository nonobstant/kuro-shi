var plantStep = 0;

//----------------------------------------------------------------------------//

function setupGrowingPlant(parentDiv, growing) {
	var plantLineLength = 12;
	var plantCharacter = [];
	var plantWidth = 80;
	var plantHeight = 9;

	// we're using a 2d grid of characters which will then be converted to
	// strings at the end
	// initialize the grid of characters
	plantCharacter = [];
	for (var x = 0; x < plantWidth; x ++) {
		plantCharacter.push(new Array(plantHeight));
		for (var y = 0; y < plantHeight - 2; y ++) {
			plantCharacter[x][y] = ' ';
		}
	}
	makeInitialDisplay();

	// draw plants here
	if (growing) {
		makeGround();

		makePlants();

		//makeClouds();
	}
	// if we've wandered out of the plains / forest / key area
	if (!growing) {
		makeInitialDisplay();
	}

	var string = convertArrayToHTML(plantCharacter);
	string = string.replace(/ /g, '&nbsp'); // replace spaces with nonbreaking spaces
	parentDiv.innerHTML = string;

	if (growing)
		plantStep ++;


	function makeGround() {
		var type = ['^', '-'];
		var margin = 10;
		for (var x = 0; x < plantWidth; x ++) {
			if ((x > margin) && (x < plantWidth - margin))
				plantCharacter[x][plantHeight - 3] = pick(type);
			else
				plantCharacter[x][plantHeight - 3] = '-';
		}
	}


	function makePlants() {
		var count = dRandomIn(2, 4);
		console.log("\nmaking " + count + " plants");
		var time = plantStep;
		var placement = 11;
		while (placement < plantWidth - 12) {
			var flowering = dRandomInt(2);
			var maxHeight;
			var startOffset = -dRandomInt(5) - 1;
			console.log("start offset = " + startOffset);
			if (flowering == 0)
				maxHeight = dRandomIn(2, 3);
			else
				maxHeight = dRandomIn(4, 5);
			var currentHeight = Math.min(maxHeight, startOffset + time);
			//console.log("current height is " + currentHeight + ", max height is " + maxHeight);
			//console.log("placement = " + placement);
			if (currentHeight > 0)
				drawPlant(placement, currentHeight, '❉');
			placement += dRandomIn(1, 3);
		}
	}


	function drawPlant(plantX, height, apexCharacter) {
		var y = plantHeight - 4;
		var resetSeed = seed;
		console.log("drawing plant at " + plantX);
		for (var i = 0; i < height - 1; i ++) {
			plantCharacter[plantX][y] = '|';
			y --;
		}
		plantCharacter[plantX][y] = apexCharacter;
		seedDRand(resetSeed);
	}


	function makeClouds() {
		var resetSeed = seed;

		var cloud = ['-', '+', ' ', ' ', ' '];
		for (var y = 0; y < 3; y ++) {
			var cloudRow = [];
			for (var i = 0; i < 3 * plantWidth; i ++)
				cloudRow.push(pick(cloud));
			for (var x = 0; x < plantWidth; x ++) {
				if (plantCharacter[x][y - 1] != ' ')
					plantCharacter[x][y] = cloudRow[(plantStep + x) % (3 * plantWidth)];
			}
		}

		seed = resetSeed;
	}


	function makeStoppedDisplay() {
		var resetSeed = seed;

		var pendant = ['\\', '\/', ' '];
		for (var y = 0; y < 8; y ++) {
			for (var x = 0; x < plantWidth; x ++) {
				if (y == 0)
					plantCharacter[x][y] = pick(pendant);
				else if (plantCharacter[x][y - 1] != ' ')
					plantCharacter[x][y] = pendant[(x + y) % 2];
			}
		}

		var ascender = ['^', '^', ' '];
		for (var y = plantHeight - 1; y > plantHeight - 9; y --) {
			for (var x = 0; x < plantWidth; x ++) {
				if (y == plantHeight - 1)
					plantCharacter[x][y] = pick(ascender)
				else if (
				(plantCharacter[x][y + 1] != ' ')
				&& (plantCharacter[(x - 1 + plantWidth) % plantWidth][y + 1] != ' ')
				&& (plantCharacter[(x + 1) % plantWidth][y + 1] != ' '))

					plantCharacter[x][y] = '^';
			}
		}

		seed = resetSeed;
	}


	function makeInitialDisplay() {
		var header = "projects";
		for (var y = 0; y < plantHeight; y ++) {
			for (var x = 0; x < plantWidth; x ++) {
				if (y < plantHeight - 3)
					plantCharacter[x][y] = ' ';
				else if (y % 2 == 0)
					plantCharacter[x][y] = '-';
				else
					plantCharacter[x][y] = header.charAt(x);
			}
		}

	}


	var resetSeed = seed;


	function replaceWithNonbreakingSpaces(input) {
		input.replace(/' '/g, '.');
		return input;
	}


	function convertArrayToHTML(array) {
		var string = "";
		for (var y = 0; y < plantHeight; y ++) {
			for (var x = 0; x < plantWidth; x ++) {
				string += plantCharacter[x][y];
			}
			string += "<br>";
		}
		return string;
	}
}

//----------------------------------------------------------------------------//
