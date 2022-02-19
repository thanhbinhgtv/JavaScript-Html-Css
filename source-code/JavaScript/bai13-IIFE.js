// IIFE trong JavaScriptl (Immediately Invoked Function Expression)

// VD : Có thể thay () bằng một biểu thức !,+,-.* ...
(function() {
    console.log('Now Now 1')
})();

// VD :
const a = function(...rest){
    console.log(rest[1] + rest);
}(3, 4);

// VD :
(() => {
    console.log('Now Now 2');
})();