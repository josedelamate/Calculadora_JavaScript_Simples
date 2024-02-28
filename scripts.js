const display = document.getElementById('resultado') 
console.log(display)

function inserirDisplay(valor){
    display.value += valor
}

function limparDisplay() {
    display.value = ""
}

function calcular(){
    display.value = eval(display.value) //A função eval() computa um código JavaScript representado como uma string
}