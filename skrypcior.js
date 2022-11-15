liczby1=[1,2,3,4,5,6,7,8,9,10];
liczby2=[11,12,13,14,15,16,17,18,19,20];

liczby3=[...liczby1,...liczby2];


let szczalka=(liczby1,liczby2)=>{
    return[...liczby1,...liczby2]
};
console.log(szczalka(liczby1,liczby2));




// expected output: 10

const array2 = [1, 2, 3];

const arr1 = [1, 2, 3, 4];
const arr2=["Tomek","Adam","Marek","Bartek"]
const numbers=[1,2,3,4,5];
//zad 1
const last=array2.reverse();
console.log("ostatni element tablicy to "+last[0]);

//zad2

console.log(liczby3.join(", "));
let funkcja = (liczby1,liczby2) => console.log(liczby3.join(", "));
//zad 3
const filter=liczby3.filter(liczby=>liczby=>2);
console.log("zadanie 3: "+filter);
//zad 4


// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
 initialValue
);
console.log(sumWithInitial);
// zad5
const map1 = array2.map(x => x * x+3);
console.log(map1);