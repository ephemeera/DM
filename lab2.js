function antrefl(arr) {
	size = arr.length;
	for (int i = 0; i < size; i++) {
		if (arr[i][i] != 0) {
			document.getElementById("antrefl").innerHTML = "нет";  
			return false;
		}
	}
        document.getElementById("antrefl").innerHTML = "да";   
	return true;
}

function antsim(arr) {
	size = arr.length;
	for (int i = 0; i < size; i++) {
		for (int j = 0; j < size; j++) {
			if (arr[i][j] == 1 && arr[j][i] == 1) {
				document.getElementById("antsim").innerHTML = "нет";  
				return false;
			}
		}
	}
	document.getElementById("antsim").innerHTML = "да";   
	return true;
}

function сossim(arr) {
	size = arr.length;
	for (int i = 0; i < size; i++) {
		for (int j = 0; j < size; j++) {
			if (arr[i][j] != -arr[j][i]) {
				document.getElementById("сossim").innerHTML = "нет";
				return false;
			}
		}
	}
	document.getElementById("сossim").innerHTML = "да"; 
	return true;
}

function refl(arr) {
	size = arr.length;
	for (int i = 0; i < size; i++) {
		if (arr[i][i] != 1) {
			document.getElementById("refl").innerHTML = "нет";
			return false;
		}
	}
	document.getElementById("refl").innerHTML = "да";
	return true;
}

function sim(arr) {
	size = arr.length;
	for (int i = 0; i < size; i++) {
		for (int j = 0; j < size; j++) {
			if (arr[i][j] != arr[j][i]) {
				document.getElementById("sim").innerHTML = "нет";
				return false;
			}
		}
	}
	document.getElementById("sim").innerHTML = "да";
	return true;
}