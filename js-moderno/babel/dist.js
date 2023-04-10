"use strict";

var media = function media() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (a, b) {
    return a + b;
  });
  return sum / numbers.length;
};
media(2, 6, 3, 7, 4);
var ponderada = function ponderada() {
  var mult = 0;
  var sum = 0;
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  for (var i = 0; i < numbers.length; i++) {
    mult += numbers[i].n * numbers[i].p;
    sum += numbers[i].p;
  }
  return mult / sum;
};
ponderada({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
});
var mediana = function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  if (numbers.length % 2 == 0) {
    var meio = numbers.length / 2;
    var _mediana = (numbers[meio] + numbers[meio - 1]) / 2;
    console.log(_mediana);
  } else {
    var _meio = parseInt(numbers.length / 2);
    var _mediana2 = numbers[_meio];
    console.log(_mediana2);
  }
};
mediana(2, 4, 5, 7, 42, 99);
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 5)));
