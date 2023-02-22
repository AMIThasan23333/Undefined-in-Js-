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


/* =====4========= 
if return has nothing on right side will return undefined
*/


function noNegative(a,b){

    if(a < 0  || b < 0){

        return
    }

    return a+b;
}

  const total = noNegative(2,-4);

  console.log(total);


/* ===5====
property that do not exist will give undefined
*/

const fifth = {id: 2, name :'ponchom', age : 40}

console.log(fifth.name,  fifth.again)

/* =======6======= 


accesssiong array element outside of index range 
*/

const sixth = [4,6,7,9,22,44];


console.log(sixth[1],sixth[2], sixth[6])




