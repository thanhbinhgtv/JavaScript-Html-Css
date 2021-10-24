// 1. Declaration function: Hỗ trợ hoisting
    function declaration() {
        return 'declaration';
    };
    declaration();

// 2. Expression function:
    // demo 1:
        var expression = function() {
            console.log('demo 1 : expression');
        };
        expression();

    // demo 1.1: có thể đặt tên giúp dễ hiểu function này để làm gì.
        var expression = function nameFunction() {
            console.log('demo 1 : expression');
        };
        expression();

    // demo 2:
        setTimeout(function() {
            console.log('time out');
        },1000);

    // demo 2.1: có thể đặt tên giúp dễ hiểu function này để làm gì.
        setTimeout(function setTime() {
            console.log('time out');
        },1000);

    // demo 3:
        var myObject = {
            name: 'Thanh Binh',
            myFunction: function(){
                return 'ok';
            }
        }

// 3. Arrow function:
    // Arrow function không có context (this).
    // Arrow function không có constructor.

    // demo 1:
        var sum1 = (a, b) => {
            return a + b;
        };
        console.log(sum1(2, 5));                            // 7
        
    // demo 2:
        var sum2 = (a, b) => a + b;
        console.log(sum2(2, 6));                            // 8

    // demo 3:
        var sum3 = (a, b) => ({a1: a, b1: b, sum: a+b});
        console.log(sum3(2, 7));                            // 7, 8, {a1: 2, b1: 7, sum: 9}