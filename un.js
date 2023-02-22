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
parameter that do not passes will be undefined 
*/



function third (a,b,c,d){

    const total = a+b+c+d;
    console.log(a,b,c,d);
}

third(2,4);


/* =====4========= */


function noNegative(a,b){

    if(a < 0  || b < 0){

        return
    }

    return a+b;
}

  const total = noNegative(2,-4);

  console.log(total);




