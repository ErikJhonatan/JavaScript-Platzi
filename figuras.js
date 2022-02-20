function positiveLength(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) throw new Error('Ingresa medidas positivas y finitas');
  return number;
}
function readLength(id) {
  const input = document.getElementById(id);
  if (!input) throw new Error('No se encontró el campo');
  const number = Number(input.value);
  if (!input.value.trim() || !Number.isFinite(number) || number <= 0) {
    input.setCustomValidity('Ingresa una medida positiva'); input.reportValidity();
    return null;
  }
  input.setCustomValidity('');
  return number;
}
// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return positiveLength(lado) * 4 + "cm";
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrada(lado) {
  return positiveLength(lado) ** 2 + "cm²";
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
  const sides = [lada1, lado2, base].map(positiveLength);
  if (sides.some(side => side >= sides.reduce((sum, value) => sum + value, 0) - side)) throw new Error('Los lados no forman un triángulo');
  return sides.reduce((sum, value) => sum + value, 0);
}
// console.log("El perimetro del triángulo es: " + alturaTriangulo + "cm");
function areaTriangulo(base, altura) {
  return (positiveLength(base) * positiveLength(altura)) / 2 + "cm²";
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
  return positiveLength(radio) * 2;
}
// console.log("El diametro de circulo es: " + diametroCirculo + "cm");
// CIrcunferencia
function circunferenciaCirculo(diametro) {
  return positiveLength(diametro) * Math.PI;
}
//console.log("La circunferencia del circulo es: " + circunferenciaCirculo + "cm");
//área
function areaCirculo(radio) {
  return Math.PI * positiveLength(radio) ** 2 + "cm²";
}
console.log("El area del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();

//Aquí interactuamos con el html
function calcularCuadrado() {
  //Acceso al valor del Input en html
  const input = document.getElementById("InputCuadrado");
  const value = readLength("InputCuadrado");
  if (value === null) return;
  const perimetro = perimetroCuadrado(value);
  const area = areaCuadrada(value);
  const respuesta = document.getElementById("cuadradoPerimetro");
  respuesta.textContent = perimetro;
  const respuesta2 = document.getElementById("cuadradoArea");
  respuesta2.textContent = area;
}
function calcularAreaCuadrada() {
  //Acceso al valor del Input en html
  const input = document.getElementById("InputCuadrado");
  const value = readLength("InputCuadrado");
  if (value === null) return;
  const area = areaCuadrada(value);
  const respuesta = document.getElementById("cuadradoArea");
  respuesta.textContent = area;
}
function calcularTriangulo() {
  const input1 = document.getElementById("InputLado1");
  const input2 = document.getElementById("InputLado2");
  const input3 = document.getElementById("InputLado3");
  const altura = document.getElementById("Altura");
  const value1 = readLength("InputLado1");
  const value2 = readLength("InputLado2");
  const value3 = readLength("InputLado3");
  const alturaValue = readLength("Altura");
  if ([value1, value2, value3, alturaValue].includes(null)) return;
  let perimetro;
  try { perimetro = perimetroTriangulo(value1, value2, value3); }
  catch (error) { input3.setCustomValidity(error.message); input3.reportValidity(); return; }
  const area = areaTriangulo(value3, alturaValue);
  const respuesta = document.getElementById("trianguloPerimetro");
  respuesta.textContent = perimetro;
  const respuesta2 = document.getElementById("trianguloArea");
  respuesta2.textContent = area;
}
function calcularCirculo() {
  const input = document.getElementById("Input");
  const radio = readLength("Input");
  if (radio === null) return;
  const diametro = diametroCirculo(radio);
  const circunferencia = circunferenciaCirculo(diametro);
  const area = areaCirculo(radio);

  const respuesta = document.getElementById("circuloDiametro");
  respuesta.textContent = diametro;
  const respuesta2 = document.getElementById("circuloCircunferencia");
  respuesta2.textContent = circunferencia;
  const respuesta3 = document.getElementById("circuloArea");
  respuesta3.textContent = area;
}
