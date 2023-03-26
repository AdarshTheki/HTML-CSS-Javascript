// loop :-

for(let index = 0; index < 5; index++){
  console.log(`index of value is: ${index}`)
}

let heros = ['Adarsh','Ayush','Ankita','Sarita',"Pralhad"]

for (let index=0; index<heros.length; index++){
  let another = []
  const element  =  heros[index];
  // console.log(`Hero is ${element}`);
  another.push(element.toUpperCase())
  console.log(another);
}
// console.log(another); // this terminal not print massage the clear memory.

// let i=0;
// while(i<5){
//   console.log("Hello World!");
//   i++;
// }

// do{
//   console.log("Hello World!");
//   i++;
// } while(i<5);

// for(const element of heros){
//   console.log(`Hero is a ${element}`);
// }

for (let i = 0; i < heros.length; i++) {
  const element = heros[i];
  if(i==2) {
    // break;
    continue; // skip the one iteration 'Ankita' 
  }
  console.log(`New Language ${element}`);
}
console.log("I am outside the block :");