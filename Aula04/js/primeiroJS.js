const NAME = prompt("Diga seu nome")    

alert('Prazer, ' +  NAME + "!")

document.write('<p>Olá ' + NAME + ', seu nome tem ' + NAME.length + ' letras </p>') //Escreve no documento HTML

var n1 = Number(prompt('Agora digite um número: ')) //A função de prompt recebe String
var n2 = Number(prompt('Agora digite o segundo número: '))// Usando o parseInt para transformar em inteiro
var result = n1 + n2

result = result.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'}) //Formatar o número para real. Ex: R$1.234,00

alert('A soma dos dois são: ' + result)