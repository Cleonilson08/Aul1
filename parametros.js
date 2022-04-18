// parametros de funções

function Soma(num1, num2){
    return num1 + num2;
}
console.log(Soma(5,4))
console.log(Soma(3,4))

//parametros e argumentos

function nomeidade(nome, idade) {
 return `Meu nome é  ${nome}  minha idade é ${idade} anos`;
 }
 console.log(nomeidade("cleonilson", 39 ))

 function multiplicar(num1 = 1, num2 = 1) {
     return num1 * num2;
 }
 console.log(multiplicar(Soma(4,5)))