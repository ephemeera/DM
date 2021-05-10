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
	for (var i = 0; i < r; i++) {
		input[i] = input[i].split(" ");
	}		
	document.getElementById("check").innerHTML = check(input);
}

function check(input) {
	size = input.length;
	var count = 0;
	for (var i = 0; i < size; i++) {
		var k = 0;
		for(var j = 0; j < size; j++) {
			if(input[i][j] == 1) {
				k++;
			}
		}
	if(k == 1) {
		count++;
	}
	}
	if(count == size) {
		return "да";
	}else{
		return "нет";
	}
}