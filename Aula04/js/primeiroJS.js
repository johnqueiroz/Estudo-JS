/*const NAME = prompt("Diga seu nome")    // Cria um pop up para digitar o nome

alert('Prazer, ' +  NAME + "!") // Cria um pop up para mostrar o nome

document.write('<p>Olá ' + NAME + ', seu nome tem ' + NAME.length + ' letras </p>') //Escreve no documento HTML

var n1 = Number(prompt('Agora digite um número: ')) //A função de prompt recebe String
var n2 = Number(prompt('Agora digite o segundo número: '))// Usando o parseInt para transformar em inteiro
var result = n1 + n2

result = result.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'}) //Formatar o número para real. Ex: R$1.234,00

alert('A soma dos dois são: ' + result) // Cria um pop up que mostra a soma dos valores recebidos anteriormente
*/
let paragrafoDois = document.getElementsByTagName('p')[1] // Variável que guarda o texto da tag do segundo parágrafo
let paragrafoUm = document.getElementsByTagName('p')[0] // Variável que guarda o texto da tag do primeiro parágrafo

paragrafoDois.style.color = 'darkturquoise' // It changes the CSS of the element (style.color) to darkturquoise.
document.writeln('Isso é o elemento de parágrafo 2: ' + paragrafoDois.innerText) // It print on the screen the variable with the second paragraph. The innerText returns the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.
document.writeln('Isso é o elemento de parágrafo 2: ' + paragrafoUm.innerHTML) // The innerHTML property returns: The text content of the element, including all spacing and inner HTML tags.

var msg = document.getElementById('msg') // Catch the element (div) by ID
// msg.style.backgroundColor = 'green'
// msg.innerText = 'Olá' //Change what was writen to what was defined at the variable

// let texto = document.getElementsByClassName('texto') //Catch the element (another div) by Class
// texto.style.backgroundColor = 'red'
// texto.innerText = "Tudo bem?"



const mouseOver = () => {
    msg.style.color = 'red'
    msg.style.backgroundColor = 'black'
}
const mouseOut = () => {
    msg.style.color = 'white'
    msg.style.backgroundColor = 'green'
}
const clicar = () =>{
    msg.innerText = 'Clicou'
}

msg.addEventListener('mouseover', mouseOver)
msg.addEventListener('mouseout', mouseOut)
msg.addEventListener('click', clicar)
