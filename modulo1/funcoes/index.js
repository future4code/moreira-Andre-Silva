// EXERCÍCIOS DE INTERPRETAÇÃO FUNÇÕES

// 1-a) O que vai ser impresso no console?

// R:Vai ser criada uma função e um parâmetro com uma função aritmética de multiplicação (valor 5)
// depois vai ser impresso o valor da multiplicação com o console.log (minhaFuncao) 
// 
//1-b)O que aconteceria se retirasse os dois console.log 
//e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//
// R: Não retornaria impresso no console os valores 

// 2-a) Explique o que essa função faz e qual é sua utilidade

// R: É uma função anônima, e ela consiste no nome da variável e não da função em si, não tem uso prático
// é só uma outra forma de ler e compreender as funções

// 2-b) Determine qual será a saída no console para cada uma das 3 entradas do usuário
// R: Todas serão afirmações TRUE pois se trata de booleans

//EXERCÍCIOS DE CÓDIGO

//EXERCÍCIO #1

//1-A

function primeiroExercicioFuncao() {

    const ex1 = ("Eu sou André, tenho 25 anos, moro em Joinville e sou estudante.")
    return ex1
}
console.log (primeiroExercicioFuncao())

//1-B

function segundoExercicioFuncao (nome, idade, cidade, profissao) {

     nome = prompt("Qual seu nome?")
     idade = Number (prompt("Quantos anos você tem?"))
     cidade = prompt("Aonde você mora?")
     profissao = prompt("Qual sua profissão?")

     const txtExercicio = (`Olá meu nome é ${nome}, eu tenho ${idade} anos, moro em ${cidade} e trabalho com ${profissao} `)
     return txtExercicio

}
 console.log (segundoExercicioFuncao())

 //2-A

function exercicioDoisA (primeiroNumero,segundoNumero) {

    primeiroNumero = 15
    segundoNumero = 39

    let soma = (primeiroNumero + segundoNumero)
    return soma
    
 }
 
 console.log (exercicioDoisA())

 //2-B

 function exercicioDoisB(valorUm, valorDois) {

    valorUm = Number (prompt("Insira um número"))
    valorDois= Number(prompt("Outro número"))
    let somatoria = valorUm >= valorDois
    return somatoria
     
 }

 console.log (exercicioDoisB())

 //2-C

 function exercicioDoisC(num) {

    num = Number (prompt ("Insira um número"))
    let exerciciosDoisCC = num ==0
    return exerciciosDoisCC

 }

 console.log (exercicioDoisC())

 //2-D 

 function exercicioDoisD(ultimaQuestao) {
     
    ultimaQuestao = ("Olá pessoal da Labenu".length)
   
    return ultimaQuestao
 }

 console.log (exercicioDoisD())