const data = {
    data2: {
        en: '123'
    }
};

const data2 = 'data2';
const en = 'en';

console.log(data?.[`${data2}`]?.[en]);
console.log(data[data2]);