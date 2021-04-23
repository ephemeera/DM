function antrefl(arr) {
	size = arr.length;
	for (var i = 0; i < size; i++) {
		if (arr[i][i] != 0) {
			return "нет";
		}
	}
	return "да";
}

function cossim(arr) {
	size = arr.length;
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			if (arr[i][j] == arr[j][i] && i != j) {
				return "нет";
			}
		}
	}
	return "да";
}

function refl(arr) {
	size = arr.length;
	for (var i = 0; i < size; i++) {
		if (arr[i][i] != 1) {
			return "нет";
		}
	}
	return "да";
}

function sim(arr) {
	size = arr.length;
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			if (arr[i][j] != arr[j][i]) {
				return "нет";
			}
		}
	}
	return "да";
}

function trans(arr) {
	size = arr.length;
	var arr2 = new Array(size);
	for (var i = 0; i < size; i++) {
		arr2[i] = new Array(size);
		for (var j = 0; j < size; j++) {
			arr2[i][j] = 0;
			for (var g = 0; g < size; g++) {
				arr2[i][j] += arr[i][g] * arr[g][j];
			}
		}
	}
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			if (arr2[i][j] != 0 && arr[i][j] == 0) {
				return "нет";
			}
		}
	}
	return "да";
}

function table() {
	var input = document.getElementById("input").value.split("\n");
	r = document.getElementById("r").value;
	var arr = new Array(r);
	for (var i = 0; i < r; i++) {
		arr[i] = new Array(r);
		for (var j = 0; j < r; j++) {
			arr[i][j] = 0;
		}
	}
	for (var i = 0; i < input.length; i++) {
		input[i] = input[i].split(" ");
		for (var j = 0; j < input.length; j += 2) {
			arr[input[i][0] - 1][input[i][1] - 1] = 1;
		}
	}
		
	var output = new String();
	for (var i = 0; i < r; i++) {
		for (var j = 0; j < r; j++) {
			output += arr[i][j];
			output += " ";
		}
		output += "\n";
	}
		
	document.getElementById("output").value = output;
	document.getElementById("antrefl").innerHTML = antrefl(arr);
	document.getElementById("cossim").innerHTML = cossim(arr);
	document.getElementById("refl").innerHTML = refl(arr);
	document.getElementById("sim").innerHTML = sim(arr);
	document.getElementById("trans").innerHTML = trans(arr);
}