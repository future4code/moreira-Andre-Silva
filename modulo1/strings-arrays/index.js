// Exercícios interpretação de Códigos

//QUESTÃO 1
//a. Criado uma variávvel com nome array, executado no console com o texto a. com valor undefined, no caso 
// é indefinido

//b. É atribuído o valor null para a váriavel e exibido como b. null

//c. É atribuído um novo valor para array deixando de ser uma string, e passa a ser uma lista com o número de itens 
// dentro de seu index, no console é atribuído ainda a propriedade lenght que mostra quantos itens existem 
// dentro de array


//d. É adicinado uma nova variável i com valor 0 dentro do console, no entanto é exibido somente a soma da variável 
//com o index 0

//e. É somada o index 1 da variável array com a variável i ao mesmo passo que é definido um novo valor  

//f. É criado uma nova variável como valor e somado a variável i com o index 6


//QUESTÃO 2

// O valor impresso no console com os comandos do exercício seriam deixar as letras maíusculas, trocar as letras A
//por I, mostrar o tamanho da frase

//Subi num ônibus em Marrocos// 
//SUBI NUM ÔNIBUS EM MIRROCOS com o tamanho da frase// esse seria o resultado da frase 

const nomeDoUsuario = prompt("Qual seu nome?")
const emailDoUsuario = prompt("Qual o seu e-mail?")

const usuario = `Olá o e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}`
console.log(usuario)

let comidasFavoritas = ["pizza","lasanha","chocolate","sorvete","pipoca"]
console.log(comidasFavoritas)

let minhasComidasFavoritas = comidasFavoritas
console.log (minhasComidasFavoritas=['Minhas comidas favoritas são:',"pizza","lasanha","chocolate","sorvete","pipoca"])

const comidaUsuario = prompt("Qual sua comida favorita?")
console.log(comidaUsuario)

const novaComida = comidaUsuario

console.log (novaComida.replaceall)