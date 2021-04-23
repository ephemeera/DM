function table() {
	var n = document.getElementById("n").value;
	if (n < 0) {
		alert("Число n не может быть отрицательным");
	}
    var matr = '<table>';
    for (var i = 0; i < n; i++) {
		matr += '<tr>';
		for(var j = 0; j < n; j++) {
			matr += '<td> <input type="number" class="cell" min="0" max="1"></td>';
		}
		matr += '</tr>';       
    }
    matr += '</table>';
    document.getElementById('table').innerHTML = matr; 

}

function check() {
	var n = document.getElementById("n").value;
	var mas = document.getElementsByClassName("cell");
	var g = 0;
	var count = 0;
	for (var i = 0; i < n; i++) {
		var k = 0;
		for(var j = 0; j < n; j++) {
			if(mas[g].value == 1) {
				k++;
			}
			g++;
		}
	if(k == 1) {
		count++;
	}
	}
	if(count == n) {
		document.getElementById('check').innerHTML = 'Отношение является функцией';
	}else{
		document.getElementById('check').innerHTML = 'Отношение не является функцией';
	}
}

function run() {
	check();
}