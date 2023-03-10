var arr = [];
var finarr = [];
console.log("Before: " + finarr);
function sum(k) {
    var a = k.toString();
    var b = a.length;
    var sum = 0;
  

        for (let j = 0; j < b; j++) {
            sum = sum + parseInt(a[j]);
        }
        finarr.push(sum);
    

}
console.log("Before: " + arr);
for (var i = 1; i <= 100; i++) {
    arr.push(i);
    sum(i);
}
console.log("After: " + arr);


console.log("After: " + finarr);