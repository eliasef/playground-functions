// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } if (param1 === false && param2 === false) {
    return false;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(2,3));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties * 1;
  return pontos;
}

// Desafio 6

function highestCount(numeros) {
  let maiorValor = -10
  // parte 1: MAIOR VALOR
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorValor) {
      maiorValor = numeros[i]
    }
  }
  // parte 2: VEZES REPETIDAS
  let valorRepetido = 0;

  for (i = 0; i < numeros.length; i++) {
    if (maiorValor === numeros[i]) {
      valorRepetido ++
    }
  }
  return valorRepetido
}

console.log(highestCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
                         
let distancia1 = Math.abs(cat1 - mouse);  
                           
let distancia2 = Math.abs(cat2 - mouse); 

if (distancia1 > distancia2) {
  return 'cat2';
} else if (distancia2 > distancia1) {
  return 'cat1'
} else if (distancia1 === distancia2) {
  return 'os gatos trombam e o rato foge'
}

}

console.log(catAndMouse(1,0,2))

// Desafio 8
function fizzBuzz(numbers) {

  let resultado = []
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      resultado.push('fizzBuzz')
    } else if (numbers[i] % 3 === 0) {
      resultado.push('fizz')
    } else if (numbers[i] % 5 === 0) {
      resultado.push('buzz')
    } else {
      resultado.push('bug!')
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {

let trocado = ''

  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      trocado += 1
    } else if (string[i] === 'e') {
      trocado += 2
    } else if (string[i] === 'i') {
      trocado += 3
    } else if (string[i] === 'o') {
      trocado += 4
    } else if (string[i] === 'u') {
      trocado += 5
    } else {
      trocado += string[i]
    }
  }
  return trocado
}

console.log(encode('hi there!'))

function decode(string) {
  let trocado = ''

  for (let i = 0; i < string.length; i++) {
    if (string[i] == 1) {
      trocado += 'a'
    } else if (string[i] == 2) {
      trocado += 'e'
    } else if (string[i] == 3) {
      trocado += 'i'
    } else if (string[i] == 4) {
      trocado += 'o'
    } else if (string[i] == 5) {
      trocado += 'u'
    } else {
      trocado += string[i]
    }
  }
  return trocado
}

// Desafio 10
function techList(tecnologias, name) {

  let tech = [];

  tecnologias.sort()

  for (let i = 0; i < tecnologias.length; i += 1) {
    tech.push({
      tech: tecnologias[i],
      name: name
    })
  }
 
  if (tecnologias.length === 0) {
    return 'Vazio!'
  } else {
    return tech
  }

}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
}