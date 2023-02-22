/* 
8 ways to get undefined

1 .  variable that is not initialized will give undefined


*/

/*   ========1====== */
  let first;

console.log(first)


/* =====2====== 
if function do not return anything
*/

function second(a,b){
    const total = a+ b;
}

const result = second();

console.log(result);


/* ====3======= 
function with no parameter value
*/



function third (a,b,c,d){

    const total = a+b+c+d;
    console.log(a,b);
}

third(2,4);



