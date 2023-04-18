// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

let myHeros = ["Thor", "spiderMan"]

let heroPower = {
    thor: 'hummer', 
    spiderMan: 'sling',
    
    getSpiderPower: function (){
        console.log(`Spider power is ${this.spiderMan}`);
    }
}
// all the myHero and heroPower:
Object.prototype.Adarsh = function(){
    console.log("Adarsh is Present in object");
}
console.log(myHeros.Adarsh());
console.log(heroPower.Adarsh());

// only myHero:
Array.prototype.Ayush = function(){
    console.log("Ayush is Present in Array");
}
console.log(myHeros.Ayush());
// console.log(heroPower.Ayush());

const user = {
    name: "Adarsh",
    email: "Adarsh@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvaiable: false
}
const TAAssistant = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    prompted: Teacher,
    __proto__: TeachingSupport               // Ejected TeachingSupport
}
// TAAssistant.__proto__.isAvaiable
// TAAssistant.prompted.makeVideo
// Teacher.__proto__ = user

Object.setPrototypeOf(TeachingSupport, Teacher)

String.prototype.truelength = function(){
    console.log(`this is true length ${this.trim().length}`);
}
console.log("Ankita   ".truelength());
console.log("Ayush   ".truelength());
