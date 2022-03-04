// Rest Parameters : Toán tử rest parameters này gần giống với arguments. Rest merge các element riêng lẻ thành 1 array
    // Demo 1 :
    function logger(...rest) {
        console.log(rest);                  // [1, 2, 3, 4]
    }
    logger(1, 2 , 3,4);

    // Demo 2 :
    function logger2(a, ...rest) {
        console.log(a);                     // a
        console.log(rest);                  // [1, 2, 3]    (Rest merge các element riêng lẻ thành 1 array).
    }
    logger2('a', 1, 2, 3);

    // Demo 3 :
    const a = function(...rest){
        console.log(rest[1] + rest);
    }(3, 4)

    console.log('first', 4 + [3, 4, 5])