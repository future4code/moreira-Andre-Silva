// Exercícios de interpretação de código- Condicionais

// 1. Leia o código abaixo:
    
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// R: Testa se um número é par

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// R: Números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// R: Números impares



// 2. O código abaixo foi feito por uma pessoa desenvolvedora,
//  contratada para automatizar algumas tarefas de um supermercado:

// a) Para que serve o código acima?
// R: Para organizar e listar uma variedade maior de condições, criando uma variável e adicionando "opções" a ela

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// R: O preço da fruta maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma Pêra, 
// qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default
// R: Seria impresso a mensagem no console do valor de default




// 3. Leia o código abaixo:
// a) O que a primeira linha está fazendo?
// R: Pedindo para o usuário inserir um número 

// b) Considere um usuário digitou o número 10.
// Qual será a mensagem do terminal? E se fosse o número -10?
// R: Esse número passou no teste, se fosse menos -10 daria erro pois não atende o requisito da condicional

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// R: Sim pois não existe a condição para números negativos dentro do bloco muito menos no escopo do código 
// a variável mensagem também não é exibida pois ela não existe no escopo global somente no bloco da condicional 

let idadeUsuario = Number(prompt("Qual a sua idade?"))

if (idadeUsuario >= 18 ){
 console.log("Você pode dirigir")
} else { (idadeUsuario < 18) 
    
    console.log("Você NÃO pode dirigir")
}
// OK :D



let matutino = "M"
const vespertino = "V" 
const noturno = "N"
let horarioEstudo = prompt
(`Qual horário você estuda?,matutino= ${matutino}, vespertino= ${vespertino} , noturno= ${noturno}`)

if (vespertino) {
    let alunoManha = matutino = "Bom dia!"
    console.log(alunoManha)

} else if  (horarioEstudo)  { 
    let alunoTarde = vespertino = "Boa tarde!"
    console.log(alunoTarde)

} else { (horarioEstudo)
    let alunoNoite = noturno= "Boa noite!"
    console.log(alunoNoite)

}








