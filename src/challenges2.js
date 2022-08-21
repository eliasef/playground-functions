// Desafio 11
function generatePhoneNumber(numeros) {

let doisPrimeirosNum = "(" + numeros[0] + numeros[1] + ")"

let cincoPrimeirosNum = " " + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6]

let ultimosNum = "-" + numeros[7] + numeros[8] + numeros[9] + numeros[10]

let resultado = doisPrimeirosNum + cincoPrimeirosNum + ultimosNum

if (numeros.length !== 11) {
  return 'Array com tamanho incorreto.'
} 

//

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];
  let repeticao = 0;
  for (let i2 = 0; i2 < numeros.length; i2++) {
    if (numero === numeros[i2]) {
      repeticao ++
    }
  }

  if (numeros[i] < 0 || numeros[i] > 9 || repeticao >= 3) {
    return 'não é possível gerar um número de telefone com esses valores'
  } 
}

return resultado
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB)) {
    return true
  } else {
    return false
  }
}
console.log(triangleCheck(10, 14, 8))

// Desafio 13
function hydrate(bebida) {
  let numbers = ''
  let quantity = 0;
  let waterQuantity;
  for (let i = 0; i < bebida.length; i++) {
   if (Number(bebida[i] >= 0)) {
     numbers += bebida[i]
   } else {
     numbers = Number(numbers)
     quantity += numbers;
     numbers = '';
   }
}

if (quantity === 1) {
  waterQuantity = `${quantity} copo de água`
} else {
  waterQuantity = `${quantity} copos de água`
}

  return waterQuantity
}



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
