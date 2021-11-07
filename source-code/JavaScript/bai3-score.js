{
    var a = 1;
};

function score1() {
    var b = 2;
};

function score2() {
    var c = 3;
    function childScore() {
       console.log(c);
    }
    return childScore();
};

console.log(a);         // 1
console.log(b);         // Uncaught ReferenceError: b is not defined
score2();               // 3