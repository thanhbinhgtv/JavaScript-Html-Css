/*
    Array Methods:
        1. forEach() : Lặp qua tất cả các phần tử của mảng.
        2. every() : Lặp qua tất cả các phần tử của mảng. Chỉ cần 1 ông không thỏa mãn điều kiện sẽ trả về false.
        3. some() : Lặp qua tất cả các phần tử của mảng. Chỉ cần 1 ông thỏa mãn điều kiện sẽ trả về true.
        4. find() : Lặp qua tất cả các phần tử của mảng. Chả về ông đầu tiên thõa mãn và dừng luôn loop.
        5. filter() : Lặp qua tất cả các phần tử của mảng. Chả về tất cả ông nào thõa mãn điều kiện.
        6. map() : Tạo ra một array mới từ array ban đầu. Có thể chỉnh sửa các giá trị trả về cho array mới.
                   https://www.youtube.com/watch?v=-xZkVmkDwbU&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=50
        7. reduce() :
*/

var myArray = [
    {
        id: 1,
        name : 'JavaScript',
        coid : 0,
    },
    {
        id: 2,
        name : 'PHP',
        coid : 10,
    },
    {
        id: 3,
        name : 'Ruby',
        coid : 20,
    },
    {
        id: 4,
        name : 'Java',
        coid : 30,
    }
];

// 1. forEach() :
    // myArray.forEach(function(array, index){
    //     console.log(array);                     // {id: 1, name: 'JavaScript', coid: 0} ...
    //     console.log(index);                     // 0 ...
    // });

// 2. every() :
    // var every = myArray.every(function(array, index){
    //     return array.coid > 20;
    // });
    // console.log(every);                          // Chỉ cần 1 ông array.coid không >20 sẽ trả về false.

// 3. some() :
    // var some = myArray.some(function(array, index){
    //     return array.coid > 20;
    // });
    // console.log(some);                           // Chỉ cần 1 ông array.coid >20 sẽ trả về true.

// 4. find() :
    // var find = myArray.find(function(array, index){
    //     return array.coid > 10;
    // });
    // console.log(find);                           // {id: 3, name: 'Ruby', coid: 20}. Thấy ông thỏa mãn cái là dừng loop, ko kiểm tra tiếp.

// 5. filter() :
    // var filter = myArray.filter(function(array, index){
    //     return array.coid > 10;
    // });
    // console.log(filter);                         // {id: 3, name: 'Ruby', coid: 20}, {id: 4, name: 'Java', coid: 30}.

// 6. map() :
    // var mapArray = myArray.map(function(array, index){
    //     return {
    //         id: array.id,
    //         name: `Name: ${array.name}`,
    //     };
    // });
    // console.log(mapArray);

// 7. reduce() :
    // Cách thường dùng :
    var totalCoin = 0;                              // Biến lưu trữ.
    for(var arrayValue of myArray) {                // Lặp qua các phần tử.
        totalCoin += arrayValue.coid;               // Thực hiện cộng dồn coin.
    }
    console.log(totalCoin);                         // 60

    // Với reduce() :
    var totalCoinReduce = myArray.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.coid;
    },0);                                           // initial value

    console.log(totalCoinReduce);                   // 60