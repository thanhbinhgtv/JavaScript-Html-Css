// Tham Trị
var Tt1 = 2;
var Tt2 = Tt1;
Tt1 = 4;
console.log(Tt2);   // 4

// Tham Chiếu
// demo 1
 var Tc1 = ['1', '2','3'];
 var Tc2 = Tc1;
 this.Tc1[0] = 2;       // Cách này chỉ thay đổi property trong Tc1, không làm thay đổi tham chiếu(reference).

console.log(this.Tc2); // 2, '2', '3'

// demo 2
var Tc3 = {
    name: 'Binh'
};

var Tc4 = Tc3;
Tc3 = {                 // Cách này làm Tc3 được gán sang tham chiếu(reference) mới.
    name: 'Thanh'
};

console.log(Tc4.name); // Binh