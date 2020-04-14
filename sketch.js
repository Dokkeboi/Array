var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var sum8 = [];

for (i = 0; i < array1.length; i++) {
  for (j = 0; j < array2.length; j++) {
    if(array1[i] + array2[j] >= 8) { 
      sum8.push([array1[i], array2[j]]);
    }
  }
}
document.getElementById("demo").innerHTML = sum8;