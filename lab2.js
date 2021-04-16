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
