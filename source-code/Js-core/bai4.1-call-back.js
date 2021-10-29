// Bạn có thể thấy được thời điểm mà callback được thực thi là sau khi biến myName thực hiện. Và khi chúng ta gọi sayHello trả về sẽ alert với nội dung là "Binh, Hello".

function sayHello(name, callBack) {
    var myName = name.toUpperCase() + ', Hello';
    return callBack(myName);
};

const result = sayHello('binh', function(arg) {
    return arg
});

console.log(result);

console.log(false || 'text');
console.log(false && 'box');