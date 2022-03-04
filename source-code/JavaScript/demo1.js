
!function Log(){
    setTimeout(() => {
        console.log(1);
        setTimeout(() => {
            console.log(1);
            setTimeout(() => {
                console.log(1);
            }, 1000)
        }, 1000)
    }, 1000)
}()