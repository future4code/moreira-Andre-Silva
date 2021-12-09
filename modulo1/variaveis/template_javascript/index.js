// Exercício de interpretação de código

// 1) Vai ser impresso no console o valor de b que é 10, depois vai ser alterado o valor da variável para 5,
//  em seguida vai ser impresso no console o valor de a e b como b foi alterado a partir desse ponto ele não será mais
// 10 como o valor de a 
// 
// 2) Criado uma variavel c onde todos eles trocam valor entre si, tornando todos com o valor de 10 em seguida 
// imprime no console o novo valor
// 
// 3) O programa calcula o valor de ganho por hora e nomes mais significativos para a variável 
// p poderia ser horasTrabalhadas
// t poderia ser recebePorDia

// Exercício de escrita de código
// 1)

let nome 
let idade
console.log(typeof (idade,nome))
// O código imprime undefined pois não possui valor na váriavel
const nomeUsuario = prompt("Qual o seu nome?")
nome = nomeUsuario

const idadeUsuario = Number(prompt("Qual sua idade?"))
idade = idadeUsuario

console.log(typeof (idade,nome))
// O código imprime o valor da variável como uma string 
console.log(`Olá ${nome} você tem ${idade}anos!`)
// 2
const perguntaUm = prompt("Você está usando roupa azul hoje?")
let respostaUm = perguntaUm

console.log("Você está usando roupa azul hoje?-",respostaUm)

const perguntaDois = prompt("Você gosta de gatos?")
let respostaDois = perguntaDois

console.log("Você gosta de gatos?-",respostaDois)

const perguntaTres = prompt("Hoje está chovendo?")
let respostaTres = perguntaTres

console.log("Hoje está chovendo?-", respostaTres)

// 3
let a = 10
let b = 25
let c 

c = a
a = b
b = c
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
