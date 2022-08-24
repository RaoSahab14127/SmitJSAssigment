// Task1;
function reversee(_a){

var a1 = _a.split("");
var a2 = a1.reverse().join("");
console.log(a2);
}


//Task2;
function check(_a){
    var a1 = _a.split("");
  var a2 = a1.reverse().join("");
  console.log(a2);
    if (_a === a2){
      console.log("Yup this is pelindrome")
    }
    else{
      console.log("Not a pelindrome")
    }
                  }
  
  check("aka");
//Task3;
function comb(_a){
  var b=[]
  var a = _a.split("")
  for (var i = 0; i<(_a.length);i++){
  for   (var j = i+1; j<((_a.length)+1);j++){
    b.push(_a.slice(i,j));
    
    
  }
    
  }
  console.log(b);}
  
  comb("dog")
  
  
//Task4;
function reversee(_a){

var a1 = _a.split("");
var a2 = a1.sort().join("");

console.log(a2);
}
//Task 5

function Captilize(_a){
  var a = _a.split(" ");
  var a2 = [];
  for (var i = 0; i<(a.length); i++){
  var a1 = a[i].charAt(0).toUpperCase();
  var a3 = a1+(a[i].slice(1, ((a[i].length)))) 
  a2.push(a3);
  }
  var a4 = a2.join(" ");
  console.log(a4);
  
}
// Task 6
function tofind(_a){
  var a = _a.split(" ")
  var a1 = []
  for (var i = 0; i<(a.length);i++){
    a1.push(a[i].length)
    
  }
  a1.sort()
  a1.reverse()
  for (var i = 0; i<(a.length);i++){
    if (a[i].length === a1[0]){
      console.log(a[i])
    }
    
  }
  
}
// Task 7
var vowel = ["a","e","i","o","u"];
var count = 0
var count1= 0
function findv(_a){

for (var i = 0; i<(vowel.length);i++){
  for (var j = 0; i<(_a.length);j++)
  {
    if (vowel[i] === _a[j]){
      count+=1;
    }
    else {
      count+=1
    }
  }
}
  console.log(count);
}
// Task 8
function prime(_a){
    var a = true;
    for (var i = 2 ; i<(_a); i++){
        if (_a%(i) === 0){console.log("even");a = false}
}
    if (a===true){console.log("prime")}
}
//Task 9
function ttpe(_a){
    (console.log(typeof(_a)))
}
//Task 10
function LS2(_a){
    var m=[]
    m.push(_a[0])
    for (var i = 0; i<(_a.length);i++){
        for (var j = 0; j<(m.length);j++){
        if ((_a[i]) === (_a[j]) ){
            _a.splice(j,j+1)
        }
    }
    }
_a.sort()
var z = _a.slice(1,2)
var zz = _a.slice(_a.length-2,_a.length-1)
console.log(z)
console.log(zz)

    
}