function handleCalculatorForm(form){

    let toDisplay = parseInt(form.inputbox.value);
    let toDisplay2 = parseInt(form.inputboxA.value);

     
  
    document.getElementById("calcResult").innerHTML = calculate(toDisplay, toDisplay2);
}

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}
function handleDrugiForm(form){

    let formValue = form.inputbox5.value;
    document.getElementById("drugiResult").innerHTML = drugi(formValue);
}
function calculate(var1, var2){
    
    let sum=var1+var2;
    let dif=var1-var2;
    let mul=var1*var2;
    let div=var1/var2;
    let mod=var1%var2;

    function log(n){
       
               if(n > 1)  return 1 + log(n / 2);
               else return 0;

        

    }
    function potega(podstawa, wykladnik) {
       if(wykladnik===0){
        return 1;
       }
       else{
        return podstawa*potega(podstawa,wykladnik-1);
       }
      }
    
    if(document.getElementById('+').checked == true) {   
          return sum;
    } 
    if(document.getElementById('-').checked == true) {   
        return dif;
  } 
  if(document.getElementById("*").checked == true) {   
    return mul;
} 
if(document.getElementById(":").checked == true) { 
    if(var2==0){
        return "nie można dzielić przez 0";
    }  
    else {
        return div;
    }
} 
if(document.getElementById('log').checked == true) {   
    return log(var1);
} 
if(document.getElementById('pow').checked == true) {   
    return potega(var1,var2);
} 
if(document.getElementById('/').checked == true) {   
    return mod;
} 
    return sum+","+dif+","+mul+","+div;
}

function palindrome(var1){
    let podzielone = var1.split("");
    let word = "";
    for (let i = podzielone.length - 1; i >= 0; i--) {
        word += podzielone[i];
    }
    if (var1 == word) return true;
    else return false;

}

function handleAnagramForm(form){

    let cyfra1 = form.inputbox3.value;
    let cyfra2 = form.inputbox4.value;
    document.getElementById("anagramResult").innerHTML = przedzial(cyfra1, cyfra2);

}



function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j] > arr[j+1]){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function anagram(var1, var2) {
    let word1 = [];
    let word2 = [];
    let flag = true;

    word1ASCII = [];
    word2ASCII = [];

    word1 = var1.split('');
    word2 = var2.split('');

    if(word1.length == word2.length){
        for(let i = 0; i < word1.length; i++){
            word1ASCII[i] = word1[i].charCodeAt(0);
        }

        for(let i = 0; i < word2.length; i++){
            word2ASCII[i] = word2[i].charCodeAt(0);
        }

        word1ASCII = bubbleSort(word1ASCII);
        word2ASCII = bubbleSort(word2ASCII);

        console.log(word1ASCII);
        console.log(word2ASCII);


        for(let i = 0; i < word1ASCII.length; i++){
            if (word1ASCII[i] != word2ASCII[i]){
                flag = false;
                break;
            }
        }
    }
    else {
        return false;
    }
    return flag;
}

function tower(n, sourcePole, destinationPole, auxiliaryPole) {
    if(0 == n)
    return;

    tower(n - 1, sourcePole, auxiliaryPole, destinationPole);

    console.log("Move the disk " + n + " from " +
    sourcePole + " to " + destinationPole);

    tower(n - 1, auxiliaryPole, destinationPole,sourcePole);
}

tower(4, 'A', 'C', 'B');

function fibonacci (n){
    if (n < 2){
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
function przedzial(a,b){
 
console.log(a);

a++;
if(a<=b){
    przedzial(a,b)
}

}

let numbers=[1, 5 ,10 ,15];
let numbers2=[1,1, 3, 3, 4 ,4];
let names=["ala", "robert", "stanislaw"];
function drugi(array) {
    array = bubbleSort(array);
    var1 = array[array.length-1];
    for (let i = array.length-1; i >= 0; i--) {
        if (var1 > array[i]) {
            var1 = array[i];
            break;
        }
    }

    return var1;
}
console.log(drugi(names));


console.log(recurse(1,5));
console.log(0.2 + 0.1);
console.log(fibonacci(5));
console.log(anagram("siema", "siemb"));
console.log("a".charCodeAt(0));
console.log("b".charCodeAt(0));