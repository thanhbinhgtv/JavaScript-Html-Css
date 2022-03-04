function cong(x, y) {
    return x + y;
}

function tru(x, y) {
    return x - y;
}

function calculator(x, y, callback) {
    return callback(x, y);
}

const phepCong = calculator(3, 5, cong);
const phepTru = calculator(3 ,5, tru)

//console.log('cong', phepCong);  // cong 8
//console.log('tru', phepTru);    // tru -2

const arr = [1, 2, 3, 4, 5];

arr.forEach(function(value, index, array) {
    console.log('value :>> ',value);
    console.log('index :>> ', index);
    console.log('array :>> ', array);   // [1, 2, 3, 4, 5]
})
