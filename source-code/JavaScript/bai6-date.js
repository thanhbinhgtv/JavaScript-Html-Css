var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log(date);
console.log(year);
console.log(month + 1);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);

console.log(`${this.day}/${month}/${year} - ${hours}:${minutes}:${seconds}`);