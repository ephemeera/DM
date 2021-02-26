function validation(){
    var arr1 = document.getElementByld("arr1").value;
    var arr2 = document.getElementByld("arr2").value;
    arr1.split(" ");
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i].lenght > 4 || arr1[i].length < 4){
            alert("Неверно введен" + number(i + 1) + " элемент в 1 множестве");
        }
        if((arr1[i][0] >= 0 && arr1[i][0] <= 9) && (arr1[i][1] % 2 == 0) 
            && (arr1[i][2] >= 'а' && arr1[i][2] <= 'я') && (arr1[i][3] >= 'а' && arr1[i][3] <= 'я'){
            alert("Неверно введен" + number(i + 1) + " элемент в 1 множестве");
            return false;
        }
    }
    for(var i = 0; i < arr2.length; i++){
        if(arr2[i].lenght > 4 || arr2[i].length < 4){
            alert("Неверно введен" + number(i + 1) + " элемент во 2 множестве");
        }
        if((arr2[i][0] >= 0 && arr2[i][0] <= 9) && (arr2[i][1] % 2 == 0) 
            && (arr2[i][2] >= 'а' && arr2[i][2] <= 'я') && (arr2[i][3] >= 'а' && arr2[i][3] <= 'я'){
            alert("Неверно введен" + number(i + 1) + " элемент во 2 множестве");
            return false;
        }
    }
    return true;
}   