// var type boolean true/false

var teste= true;
var isenable= "Isadora";

console.log(isenable)
console.log(teste)

// array - index

var names= [ 'Isadora', 'Cida', 'João']; //nomes de exemplo
console.log(names)
console.log (names [0])

names.push('Stella') //adicionou novo nome

console.log(names.length) // o length nos mostra quantos itens estão dentro do array.

var teams= new Array ();
teams.push ('Ayrton')
console.log (teams)

//IF- condicional

 function testName (name) {
    if(name.length > 10) {
    return 'Nome Grande'}
    else{ 
        return 'nome pequeno'
    }
}

function isEqual(name){
    if(name ==='João'){
        return 'É igual a João'

    } else if(name=== 'Isadora'){
        return 'É igual a Isadora'
    } 
    else{
        return 'Não é igual a nada'
    }
 }

console.log (testName( "João"))
console.log(isEqual('Isadora'))