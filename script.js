
var numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

//answer to number 1a

function myFunction(){
   
    let result = [ ];
    
    for (var i = 0; i < numbers.length; i++)   {   //loop thru the array 'numbers'
        
        let convertedNumber = String.fromCharCode(numbers[i]);    //charCode method changes numbers into their respected letter character, one at a time
        result.push(convertedNumber);    //push converted number 
    }

    document.getElementById("number1answer").innerHTML = result;  //display the converted numbers on the index.html file in a paragraph tag called 'number1answer'

}


//answer to number 1b

function myFunction2(){

numbers.forEach(numb => {
  
  const answer = String.fromCharCode(numb);
  
  document.getElementById("number2answer").innerHTML += answer;
}
)}


// answer to number 1c

function myFunction3(){

var numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

finalResult = numbers.map(function(value) {
    return String.fromCharCode(value); })
    
    
    document.getElementById("number3answer").innerHTML = finalResult

}


//answer to number 2

function checkRange(numb) {
  return numb > 72 ;
//   return numb < 88;
}

function checkRange1(numb){
    return numb < 88;
}

function myFunction4() {
  document.getElementById("number4answer").innerHTML = numbers.filter(checkRange);
}


// answer to number 3

function getProduct(product, num) {
  return product * num;
}

function myFunction5(item) {
  document.getElementById("number5answer").innerHTML = numbers.reduce(getProduct);
}

