
let number = prompt('Choisi un chiffre')


function factoriel(number) {
    let result = 1;
    for (let index = number; index > 1; index--) {
        result = result * index;
    }
    return result;
}

console.log(`Le factoriel de : ${number} est ${factoriel(number)}`)