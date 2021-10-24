// Demo 1:
function writeLog1() {
    console.log(arguments);
};
writeLog1(1, 2, 3, 'test 1', 'test 2');

// Demo 2:
function writeLog2() {
    for(let param of arguments){
        console.log(param);
    }
};
writeLog2(1, 2, 3, 'test 1', 'test 2');

// Demo 3:
function writeLog3() {
    let paramString = '';
    for(let i=0; i < arguments.length; i++) {
        if(i < arguments.length-1) {
            console.log(i);
            paramString += `${arguments[i]} - `;
        }else {
            paramString += arguments[i];
        }
    }
    console.log(paramString);
};
writeLog3(1, 2, 3, 'test 1', 'test 2');
