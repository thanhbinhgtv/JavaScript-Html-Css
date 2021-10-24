// Loop :
// 1. for : Lặp với điều kiện đúng.
// 2. white : Lặp khi điều kiện đúng.
// 3. do/white : Lặp ít nhất 1 lần, sau đó lặp với điều kiện đúng.
// 4. for/in : Lặp qua key của đối tượng. (Object hoặc Array hoặc chuỗi có bao nhiêu Key thì lặp qua bấy nhiêu lần).
// 5. for/of : Lặp qua value của đối tượng. (Array hoặc chuỗi hoặc Object có bao nhiêu Value thì lặp qua bấy nhiêu lần).

var myObject = {
    name : 'Binh',
    age : 25,
    address : 'Ha Noi'
};

var myArray = [
    'Java',
    'NodeJs',
    'JavaScript'
];

// 1. For : 
/*
    b1. var i=1 : được chạy duy nhất 1 lần đầu tiên.
    b2. kiểm tra điều kiện i<=10.
    b3. nếu điều kiện đúng => chạy mã trong block.
    b4. tăng i++ sau đó tiếp tục kiểm tra điều kiện.
*/
        for(var i = 1; i <= 3; i++) {
            console.log(i);
}

// 2. For/in : Object hoặc Array hoặc chuỗi có bao nhiêu Key thì lặp qua bấy nhiêu lần.
        for(var key in myObject) {
            console.log(key);                       // Result : name, age, address
            console.log(myObject[key]);             // Result : 'Binh', 25, 'Ha Noi'
        }

        for(var key in myArray) {                   // Tương tự với chuỗi.
            console.log(key);                       // Result : 0, 1, 2 (Key của array là số).
            console.log(myArray[key]);              // Result : 'Java', 'NodeJs', 'JavaScript'
        }

// 3. For/of : Object hoặc Array hoặc chuỗi có bao nhiêu Value thì lặp qua bấy nhiêu lần.
        for(var value of myArray) {                 // Tương tự với chuỗi.
            console.log(value);                     // Result : 'Java', 'NodeJs', 'JavaScript'
        }

    // for/of nếu dùng cho Object thì phải thông qua cái này.
            console.log(Object.keys(myObject));         // ['name', 'age', 'address']
            console.log(Object.values(myObject));       // ['Binh', 25, 'Ha Noi']