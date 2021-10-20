let btn = document.getElementById("btn")
btn.onclick = function() {
  let a = document.getElementById("num1").value
  let b = document.getElementById("num2").value
  document.getElementById("adicao").textContent = a + " + " + b
  document.getElementById("resultadoAdicao").textContent = parseFloat(a)+parseFloat(b)
  document.getElementById("multiplicacao").textContent = a + " * " + b
  document.getElementById("resultadoMultiplicacao").textContent = a*b
  document.getElementById("divisao").textContent = a + " / " + b
  document.getElementById("resultadoDivisao").textContent = a/b
  document.getElementById("restoDiv").innerHTML = a + " % " + b
  document.getElementById("resultadoRestoDiv").textContent = a%b
}