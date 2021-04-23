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
