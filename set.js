const MeuArray = [30, 30, 40, 5, 223, 2049, 3034, 05, 47, 4];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];


}

console.log(valoresUnicos(MeuArray));