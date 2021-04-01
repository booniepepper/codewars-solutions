// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

component {

    function sumArray(array arr){
        var sum = 0;
        for (i in arr) {
            sum += i;
        }
        return sum;
    }

    function arrayPlusArray(array arr1, array arr2){
        return sumArray(arr1) + sumArray(arr2);
    }

}

