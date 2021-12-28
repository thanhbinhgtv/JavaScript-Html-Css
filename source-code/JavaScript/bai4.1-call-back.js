// Các hàm xử lý bất đồng bộ như CallBack, Promiss, Async Await sẽ giúp Bất Đồng Bộ trở thành Đồng Bộ
// VD 1 : Bạn có thể thấy được thời điểm mà callback được thực thi là sau khi biến myName thực hiện. Và khi chúng ta gọi sayHello trả về sẽ alert với nội dung là "Binh, Hello".

function sayHello(name, callBack) {
    var myName = name.toUpperCase() + ', Hello';
    return callBack(myName);
};

const result = sayHello('binh', function(arg) {
    return arg
});

console.log(result);      // "Binh, Hello".

// VD 2 : CallBack xử lý bất đồng bộ :
function getName(name){
    setTimeout(
      () => {
        console.log(name);
      }, Math.floor(Math.random() * 100) + 1
    )
}

function getAll() {
    getName("Hoa");
    getName("Moc");
    getName("Lan");
}
getAll();

// Sau khi viết lại sử dụng CallBack : Hoa, Moc, Lan được in ra theo thứ tự :

function getName(name, callback){
    setTimeout(
    () => {
        console.log(name);
        callback();
    }, Math.floor(Math.random() * 100) + 1
    )
}

function getAll() {
    getName("Hoa", () => {
      getName("Moc", () => {
        getName("Lan", () => {} ) 
      })
    })
}
getAll();