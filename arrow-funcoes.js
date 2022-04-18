function apresentar(nome) {
    return ` meu nome é  ${nome}`
}


// arrow função.. usando arrow.
const apresentararrow = nome => ` meu nome é  ${nome}`;
const soma = (num1, num2) => num1 + num2;

// arrow função com mais de uma linha de instrução,

const somaDeNumerosPequenos = (num1, num2) => {
    if(num1 || num2 <= 10){
        return "somentes numeros de 1 a 9";
    }else {
        return num1 + num2;
    }
}
