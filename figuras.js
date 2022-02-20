// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4 + "cm";
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrada(lado) {
  return lado * lado + "cm²";
}

// console.log("El area del cuadrado es: " + areaCuadrada + "cm^2");
console.groupEnd();
console.group("Triangulos");
// Codigo del triangulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triangulo miden, " +
//     ladoTriangulo1 +
//     "cm " +
//     ladoTriangulo2 +
//     "cm " +
//     baseTriangulo +
//     "cm"
// );
// const alturaTriangulo = 9;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lada1, lado2, base) {
  return lada1 + lado2 + base;
}
// console.log("El perimetro del triángulo es: " + alturaTriangulo + "cm");
function areaTriangulo(base, altura) {
  return (base * altura) / 2 + "cm²";
}
console.log("El area del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo de un circulo
console.group("Circulo");
// radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");
// Pi
const PI = Math.PI;
console.log("π es : " + PI + "cm");
// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log("El diametro de circulo es: " + diametroCirculo + "cm");
// CIrcunferencia
function circunferenciaCirculo(diametro) {
  return diametro * Math.PI;
}
//console.log("La circunferencia del circulo es: " + circunferenciaCirculo + "cm");
//área
function areaCirculo(radio) {
  return Math.PI * (radio * radio) + "cm²";
}
console.log("El area del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();

//Aquí interactuamos con el html
function calcularCuadrado() {
  //Acceso al valor del Input en html
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  const area = areaCuadrada(value);
  respuesta = document.getElementById("cuadradoPerimetro");
  respuesta.innerHTML = perimetro;
  respuesta2 = document.getElementById("cuadradoArea");
  respuesta2.innerHTML = area;
}
function calcularAreaCuadrada() {
  //Acceso al valor del Input en html
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrada(value);
  respuesta = document.getElementById("cuadradoArea");
  respuesta.innerHTML = area;
}
function calcularTriangulo() {
  const input1 = document.getElementById("InputLado1");
  const input2 = document.getElementById("InputLado2");
  const input3 = document.getElementById("InputLado3");
  const altura = document.getElementById("Altura");
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);
  const alturaValue = Number(altura.value);
  const perimetro = perimetroTriangulo(value1, value2, value3);
  const area = areaTriangulo(value3, alturaValue);
  respuesta = document.getElementById("trianguloPerimetro");
  respuesta.innerHTML = perimetro;
  respuesta2 = document.getElementById("trianguloArea");
  respuesta2.innerHTML = area;
}
function calcularCirculo() {
  const input = document.getElementById("Input");
  const radio = Number(input.value);
  const diametro = diametroCirculo(radio);
  const circunferencia = circunferenciaCirculo(diametro);
  const area = areaCirculo(radio);

  respuesta = document.getElementById("circuloDiametro");
  respuesta.innerHTML = diametro;
  respuesta2 = document.getElementById("circuloCircunferencia");
  respuesta2.innerHTML = circunferencia;
  respuesta3 = document.getElementById("circuloArea");
  respuesta3.innerHTML = area;
}
