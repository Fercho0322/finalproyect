var n = prompt("Escribe un numero");

sumatoria=0;

sumatoria=n^1+n^2+n^3+n^4+n^5+n^6;

var x = 1;
var y = 2;
var sum = 0;
var limit = n;
var evensum = 2;


while ((x + y) < limit){

sum = x + y;
x = y;
y = sum;
if (sum % 2 === 0) {
evensum + sum;
}
console.log (evensum);

}
print("La sumatoria es"+sumatoria);