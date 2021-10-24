// 1. Destructuring Với Array :
var array = ['JavaScript', 'Ruby', 'PHP'];

var [a, b, c] = array;                          // Log(a, b, c) : JavaScript, Ruby, PHP
var [a, , c] = array;                           // Log(a, c) : JavaScript, PHP
var [, , c] = array;                            // Log(c) : PHP
var [a, ...rest] = array;                       // Log(rest) : Ruby, PHP
var [a, , ...rest] = array;                     // Log(rest) : PHP

// 2. Destructuring Với Object :
var object = {
    name : 'JavaScript',
    price : 1000,
    date: 'today',
};

var {name, price} = object;                     // log(name, price) : JavaScript, 1000
var {name, ...rest} = object;                   // log(rest) : {price: 1000, date: 'today'}
var {name, date,...rest} = object;              // log(rest) : {price: 1000}
var {name: changeName, date,...rest} = object;  // log(changeName) : JavaScript

    // 2.1. Trong Object có Object :
    var object2 = {
        name2 : 'JavaScript',
        price2 : 1000,
        date2: 'today',
        children: {
            name2: 'ReactJs',
        },
        // desc: 'has value',
    };

    var { name2, children } = object2;                                     // log(children) : {name2: 'ReactJs'}
    var { name2: parentName, children: {name2: childrenName} } = object2;  // log(childrenName) : ReactJs' - log(parentName) : JavaScript

    // 2.2. Nếu object2 ko có desc thì log(desc) sẽ là 'Defaul Value', còn có thì sẽ là giá trị của desc.
    var {name2, price2, desc = 'Defaul Value'} = object2;

// 3. Thêm Example :
    // Demo 1 :
    function logger({name, ...rest}) {
        console.log(name);            // JavaScript 1000
        console.log(rest);            // {price: 1000, date: 'today'}
    };
    logger({
        name : 'JavaScript',
        price : 1000,
        date: 'today',
    });
    
    // Demo 2: 
    function logger2([a, b, ...rest]) {
        console.log(a);               // 1
        console.log(rest);            // [3, 4]
    };
    logger2([1, 2, 3, 4]);