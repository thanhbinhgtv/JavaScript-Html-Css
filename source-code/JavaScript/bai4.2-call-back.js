courses = [
    'JavaScript', 'PHP', 'Ruby'
];

Array.prototype.map2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i)
    }
}

courses.map2((course, index) => {
    console.log(index, course);
});

const a = function(...rest){
    console.log(rest[1] + rest);
}(3, 4)
