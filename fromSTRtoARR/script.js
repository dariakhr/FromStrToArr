var str = 'happy,new,year,2018';
var DELIMETER = ',';
var arr = [];
var arr_elem = '';
var i = 0;
var j = 0;
while (i < str.length) {
  if (str[i] != DELIMETER) {
    arr_elem += str[i];
    arr[j] = arr_elem;
  } else {
    arr_elem = '';
    j++;
  }
  i++;
}
alert('Ur arr is: ' + arr);
