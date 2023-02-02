const somar = () =>{

let valor1 = document.getElementById('campo_numero1')
let valor2 = document.getElementById('campo_numero2')
let result_campo = document.getElementById('res')

valor1 = Number(valor1.value)
valor2 = Number(valor2.value)

let result = valor1 + valor2

result_campo.innerHTML = `A soma dos dois valores é: <strong>${result}</strong>`
}