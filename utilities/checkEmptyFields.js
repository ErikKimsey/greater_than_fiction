
/**
 * isEmpty()
 * params: array of text, author, title input
 * Checks if input is empty.
 */

 function isEmpty(input){
  console.log(input)
   input.forEach((e)=>{
     if(input.length <= 1){
       console.log(`You have an empty input somehwere.`);
       return false;
     }
   });
  return true;
 }



 export default isEmpty;