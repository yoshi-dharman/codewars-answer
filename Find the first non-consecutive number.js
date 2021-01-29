function firstNonConsecutive (arr) {
  
   if(arr.length > 1){ 
      for(let i = 1; i < arr.length; i++){
         if(Math.abs(arr[i-1] - arr[i]) > 1){
            return arr[i];
         }
      }
    }
 
   return null;
 }


 console.log(firstNonConsecutive([-6, -4, -1, 0, 1, 2, 3]));
// firstNonConsecutive([6, 7, 8, 9, 10, 11, 12, 13, 14, 15])