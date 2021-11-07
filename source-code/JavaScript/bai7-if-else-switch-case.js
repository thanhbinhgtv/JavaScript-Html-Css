// if else : 
// 1. Nếu vào trường hợp đúng, sẽ dừng lại không tiếp tục kiểm tra những điều kiện tiếp theo.
// 2. So sánh ==
// 3. Khi sử dụng để kiểm tra tính đúng sai : <, >, <=, ==, != ...

var date1 = '3';

if(date1 == 2) {
    console.log('Thu 2');
}else if(date1 == 3) {
    console.log('Thu 3');
}else if(date1 == 4) {
    console.log('Thu 4');
}else {
    console.log('Khong biet');
}

// switch case :
// 1. Nếu vào trường hợp đúng, sẽ dừng lại chỉ khi gặp break còn ko vẫn tiếp tục chạy vào các case khác.
// 2. So sánh ===
// 3. Khi có thể biết trước các giá trị cụ thể có thể lọt vào.
// 4. Trường hợp quá ít case (<3 case) thì nên dùng if else cho đỡ dối code.

var date2 = 2;

switch(date2){
    case 2:
        console.log('Thu 2');
        break;
    case 3:
        console.log('Thu 3');
        break;
    case 4:
        console.log('Thu 4');
        break;
    default:
        console.log('Khong biet');
}