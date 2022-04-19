// boolean
//const senhausuario = true;
//const contapaga = false; 
function dados(senhausuario) {
    if(senhausuario == true){
        return "acesso permitido";
    }else{
        return "acesso negado";
    }
}            
console.log(dados(true))

// truthy e falsy
// 0 >= false
// 1 = true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// undefined

// nul ==> vazio
let varminha;
let varnull = null;
console.log(varminha)
console.log(varnull)

let numero = 3;
let texto = "cleonolson"

console.log(typeof varminha)
console.log(typeof varnull)