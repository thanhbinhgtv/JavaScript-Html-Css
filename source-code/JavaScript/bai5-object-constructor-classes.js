// Object Constructor giống như một bản thiết kế ngôi nhà.

    // Cách 1 Declaration : thường dùng
    var User = function(firstName, lastName, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;

        this.getName = function() {
            return `${this.firstName} ${this.lastName}`
        };
    }
    // Cách 2 Expression :
    function User(firstName, lastName, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;

        this.getName = function() {
            return `${this.firstName} ${this.lastName}`
        };
    }

    var thanhBinh = new User('Binh', 'Thanh', 'Image 1');
    var thanhLoan = new User('Loan', 'Nguyen', 'Image 2');

    this.thanhBinh.mark = 10;

    console.log(thanhBinh);
    console.log(thanhBinh.getName());
    console.log(thanhLoan);

// Classes tương tự như Object Constructor nhưng cách viết nâng cao và dễ nhìn hơn.
// Thuộc tính, phương thức ... chia riêng từng block nhìn OK hơn.

class User2 {
    constructor(firstName, lastName, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
    }
    getName() {
        return this.firstName + this.lastName;
    }
};

var Binh = new User2('Binh', 'Thanh', 'Image1');

console.log(Binh);
console.log(Binh.getName());