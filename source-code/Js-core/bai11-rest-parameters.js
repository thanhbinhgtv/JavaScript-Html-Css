// Rest Parameters : Toán tử rest parameters này gần giống với arguments.
    // Demo 1 :
    function logger(...rest) {
        console.log(rest);
    }
    logger(1, 2 , 3,4);

    // Demo 2 :
    function logger2(a, ...rest) {
        console.log(a);                     // a
        console.log(rest);                  // 1, 2, 3
    }
    logger2('a', 1, 2, 3);