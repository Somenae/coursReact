const toto = {
    name: 'Toto',
}

// Passage par valeur via le spread
const lilya = { ... toto};

lilya.name = "Lilya";

console.log(`lilya : `, lilya);
console.log(`toto : `, toto);