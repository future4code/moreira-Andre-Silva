// Exercício de interpretação de código
// 
// 1) Vai ser impresso no console o resultado baseado na troca dos valores dos operadores
// a. false
// b. false
// c. true
// d. boolean
// 2) Vai ser impresso o valor porém o usuário pode colocar palavras também na caixa
// 3) Sugiro que defina o prompt como Number, senão o console vai sempre interpretar uma string

// Exercícios de escrita de código
// 1)
let idadeUsuario = Number(prompt("Quantos anos você tem?"))
let idadeMelhorAmigo = Number(prompt("Qual idade do seu melhor amigo?"))

const diferencaIdade = (idadeUsuario > idadeMelhorAmigo)
console.log("Sua idade é maior que a do seu melhor amigo?",diferencaIdade)
console.log(idadeUsuario-idadeMelhorAmigo)

// 2)
let numeroPar = Number(prompt("Digite aqui um número par!"))

let dividePorDois = (numeroPar / 2)
console.log (dividePorDois)
// Colocando número par sempre imprime na mesma linha o código
// não importa quantos números teste nele 
// 
// 
// Se colocar um número ímpar ele ainda vai dividir porém ele vai deixar de ser um número inteiro

// 3)
let usuarioAnos = Number (prompt("Quantos anos você tem?"))

let anosMeses = (usuarioAnos * 12)
console.log("A idade do usuário em meses é",anosMeses, "meses")

let anoDias = (usuarioAnos * 365)
console.log("A idade do usuário em dias é", anoDias ,"dias")

let anoHoras = (usuarioAnos * anoDias * 1440)
console.log("A idade do usuário em horas é de",anoHoras,)

// 4)
let numeroUm = Number(prompt("Digite um número."))
let numeroDois = Number(prompt("Digite outro número"))

let resultado = (numeroUm > numeroDois)
console.log("O primeiro numero é maior que segundo?",resultado,)

let resultadoDois = (numeroUm === numeroDois)
console.log("O primeiro numero é igual ao segundo?",resultadoDois,)

let resultadoTres = (numeroUm % numeroDois == 0 )
console.log("O primeiro número é divisível pelo segundo?",resultadoTres,)

let resultadoQuatro = (numeroDois % numeroUm == 0)
console.log("O segundo numero é divisível pelo primeiro?",resultadoQuatro,)