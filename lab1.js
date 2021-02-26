function validation(){
    var arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").split(" "); 
    var arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").split(" "); 
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i].lenght > 4 || arr1[i].length < 4){
            alert("Неверно введен " + number(i + 1) + " элемент в 1 множестве");
        }
        if(!((arr1[i][0] >= 0 && arr1[i][0] <= 9) && (arr1[i][1] % 2 == 0) 
            && (arr1[i][2] >= 'а' && arr1[i][2] <= 'я') && (arr1[i][3] >= 'а' && arr1[i][3] <= 'я'))){
            alert("Неверно введен " + Number(i + 1) + " элемент в 1 множестве");
            return false;
        }
    }
    for(var i = 0; i < arr2.length; i++){
        if(arr2[i].lenght > 4 || arr2[i].length < 4){
            alert("Неверно введен " + Number(i + 1) + " элемент во 2 множестве");
        }
        if(!((arr2[i][0] >= 0 && arr2[i][0] <= 9) && (arr2[i][1] % 2 == 0) 
            && (arr2[i][2] >= 'а' && arr2[i][2] <= 'я') && (arr2[i][3] >= 'а' && arr2[i][3] <= 'я'))){
            alert("Неверно введен " + Number(i + 1) + " элемент во 2 множестве");
            return false;
        }
    }
    return true;
} 

function union(){
   if (validation()) { 
       var arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").split(" "); 
       var arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").split(" "); 
   }
   var arr = []; 
   var k = 0;
   for(var i = 0; i < arr1.length; i++){
       for(var j = 0; j < arr2.length - k; j++){
           if(arr1[i] === arr2[j]){
               var l = j;
               while (l != arr2.length - k){
                   arr2[l] = arr2[l + 1];
                   l++;
               }
           k++;
           }
       }
   }
   var j = 0;
   for(var i = 0; i < arr1.length + arr2.length - k; i++){
       if(!null){
           if(i < arr1.length){
               arr[i] = arr1[i];
           }else if(i < arr2.length + arr1.length - k){
               arr[i] = arr2[j];
               j++;
           }
       }
   }
   
  document.getElementById("union").innerHTML = arr;   
} 

function intersection(){
   if (validation()) { 
       var arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").split(" "); 
       var arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").split(" "); 
   }
   var arr = [];
   var z = 0;
   for(var i = 0; i < arr1.length; i++){
       for(var j = 0; j < arr2.length; j++){
           if(arr1[i] === arr2[j]){
               arr[z] = arr1[i];
               z++;
           }
       }
   }
   document.getElementById("intersection").innerHTML = arr;  
}  

function extension(){
    if (validation()) { 
       var arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").split(" "); 
       var arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").split(" "); 
   }
   var arr = [];
   var z = 0;
   for(var i = 0; i < arr1.length; i++){
       for(var j = 0; j < arr2.length; j++){
           if(arr1[i] != arr2[j]){
               arr[z] = arr1[i];
               z++;
           }
       }
   }
   document.getElementById("intersection").innerHTML = arr;  
}