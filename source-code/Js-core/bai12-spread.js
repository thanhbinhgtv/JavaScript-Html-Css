// Spread :  Trãi 1 Array hoặc Object ra thành các element riêng biệt
    // Demo with Array :
    array1 = [1, 2, 3];
    array2 = [4, 5, 6];
    array3 = [...array2, ...array1];        // Spread trãi 1 mảng ra thành các element riêng biệt ( array3 = [1, 2, 3, 4, 5, 6]; )

    console.log(array3);                    // [4, 5, 6, 1, 2, 3]

    // Demo with Object :
    object1 = {
        name: 'Binh',
        age: 25
    };
    object2 = {
        address: 'Ha Noi',
        gender: 'Male'
    }

    object3 = {
        ...object1,
        ...object2,
    }

    object4 = {
        ...object1,
        ...object2, gender: 'Female'
    }

    // object4 = {                          // Cách viết thường object4 (sẽ lấy thằng gender được viết sau).
    //     name: 'Binh',
    //     age: 25,
    //     address: 'Ha Noi',
    //     gender: 'Male',
    //     gender: 'Female'
    // }

    object5 = {
        ...object1,
        ...object2, Add: 'Add'
    }

    console.log(object3);                   // {name: 'Binh', age: 25, address: 'Ha Noi', gender: 'Male'}
    console.log(object4);                   // {name: 'Binh', age: 25, address: 'Ha Noi', gender: 'Female'}
    console.log(object5);                   // {name: 'Binh', age: 25, address: 'Ha Noi', gender: 'Male', Add: 'Add'}