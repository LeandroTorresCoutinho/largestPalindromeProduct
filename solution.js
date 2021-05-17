function isPalidrome(number){
    let numberStr = number.toString();
    let list = numberStr.split('')
    let firstPart = numberStr.substring(0, (list.length/2))
    list = list.reverse()
    numberStr = list.join('')
    let secondPart = numberStr.substring(0, (list.length/2))
    if(firstPart == secondPart){
        return true;
    }else{
        return false;
    }
}

function findLargestPalindromeProductMadeOf(numberOfDigits){
    let numberOneStr = '';
    let numberOne = 0; 
    let smallestNumberStr = '1'
    let smallestNumber = 0
    let palindrome = 0
    for(let i=0; i<numberOfDigits; i++){
        numberOneStr += 9;
    }   
    for(let i=1; i<numberOfDigits; i++){
        smallestNumberStr += 0;
    }   

    smallestNumber = parseInt(smallestNumberStr)
    numberOne = parseInt(numberOneStr);

    for(let i=numberOne; i >= smallestNumber; i--){
        for(let j=numberOne; j >= smallestNumber; j--){
            palindrome = i * j;
            if(isPalidrome(palindrome)){
                return i + ' X ' + j;
            }
        }
    }
}

console.log(findLargestPalindromeProductMadeOf(3))