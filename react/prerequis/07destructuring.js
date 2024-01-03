const toto = {
    name: "toto",
    age: 22,
}

/* Destructuring objet */
const {name, age} = toto;

/* Equivalent à : 
const name = toto.name;
const age = toto.age; */

console.log('name : ', name, ', age : ', age);

const fruits = ["banane", "pomme"];
/* Destructuring tableau */
const [banane, pomme] = fruits;
/* const banane = fruits[0];
const pomme = fruits[1]; */

console.log(`banane : `, banane);
console.log(`pomme : `, pomme);