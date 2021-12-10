// Exercícios interpretação de Códigos

//1
//a. Criado uma variável com nome array, executado no console com o texto a. com valor undefined, no caso 
// é indefinido

//b. É atribuído o valor null para a váriavel e exibido como b. null

//c. É atribuído um novo valor para array deixando de ser uma string, e passa a ser uma lista com o número de itens 
// dentro de seu index, no console é atribuído ainda a propriedade lenght que mostra quantos itens existem 
// dentro de array


//d. É adicinado uma nova variável i com valor 0 dentro do console, no entanto é exibido somente a soma da variável 
//com o index 0

//e. É somada o index 1 da variável array com a variável i ao mesmo passo que é definido um novo valor  

//f. É criado uma nova variável como valor e somado a variável i com o index 6


// 2

// O valor impresso no console com os comandos do exercício seriam deixar as letras maíusculas, trocar as letras A
//por I, mostrar o tamanho da frase

//Subi num ônibus em Marrocos// 
//SUBI NUM ÔNIBUS EM MIRROCOS com o tamanho da frase// esse seria o resultado da frase 
// 
//Exercícios de escrita de código
// 
// 1)
// const nomeDoUsuario = prompt("Qual seu nome?")
// const emailDolUsuario = prompt("Qual seu e-mail")

// console.log(`O e-mail ${emailDolUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)
// // 2) 

// let comidaFavorita = ["Pizza", "Lasanha", "X-burguer", "Coxinha ", "Laranja"]
// console.log(comidaFavorita)
// console.log("Essas são as minhas comidas favoritas:",comidaFavorita,)

// let comidaUsuario = prompt(`Qual sua comida favorita?`)
// const trocarComida = [comidaUsuario]
// const comidaTrocada = trocarComida.toString()
// comidaFavorita[1] = comidaTrocada
// console.log(comidaFavorita)

// 3)

const listaDeTarefas = []

const perguntaUm =   prompt("Quais sua primeira tarefa do dia")
const respostaUm = [perguntaUm]
const trocaUm = respostaUm.toString()

<<<<<<< HEAD
listaDeTarefas[0] = trocaUm

const perguntaDois = prompt("Quais sua segunda tarefa do dia")
const respostaDois = [perguntaDois]
const trocaDois = respostaDois.toString()

listaDeTarefas[1] = trocaDois
=======
>>>>>>> f49e8f7d2fa1ca410bd441ddab22d433c19270f9

const perguntaTres = prompt("Quais sua terceira tarefa do dia")
const respostaTres = [perguntaTres]
const trocaTres = respostaTres.toString()

listaDeTarefas[2] = trocaTres

console.log(listaDeTarefas)

const tirarTarefa = Number(prompt("Escolha um número de 0 até 2"))

listaDeTarefas.splice(tirarTarefa, 1)

console.log(listaDeTarefas)
