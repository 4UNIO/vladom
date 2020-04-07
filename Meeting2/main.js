// function task1() {
//     let n = prompt("Choose your number");
//     for (let i = 1; i<= n; i++) 
//     {
//         console.log(i);
//     }
// }
// task1();
// let n = prompt("Choose");

function getSimple(n) {
    let m = 2;

    do {
        if (isSimple(m)) {
            console.log(m,isSimple());
        }

        m++;
    } while (m <= n);
}
getSimple(n);


function isSimple( n ) {
    for (let k = 2; k < n ; k++) {
        if (n % k === 0) {
            return false;
        }
    }

    return true;
}
function Even()
{
  
   let h = prompt("Choose");
for(let i = 1; i<= h; i++ ){
  if(i % 2 === 0)
  {
    console.log(i);
  }
}
}
Even();
// var count, handshake;

// count = 0;

// handshake = 0;

// while (handshake != 120) {

//    count +=1;
//    handshake = handshake+(count-1);

//  }

// console.log(count + ' человек.')