/*
  REPASO TEÓRICO
  "this" a partir de la forma de ejecución
  Ll contexto de ejecución también trae consigo la creación de la variable reservada "this".
  Todos los contextos de ejecución traerán consigo esta variable

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
*/

function thisInDifferentContexts() {
  
  // ¿Será posible esto?
  // this = {}

  this.customValue = true
  
  function normalFunction() {
    return this.customValue
  }

  function ConstructorFunction() {
    this.myProperty = 2
  }

  const normalAnonymousFunction = function() {
    return(this.customValue)
  }

  const arrowFunction = () => {
    return(this.customValue)
  }

  const objectWithMethods = {
    methodNormalFunction: function() {
      return(this.customValue)
    },
    methodArrowFunction: () => {
      return (this.customValue)
    }
  }

  /*
    🧪🧪🔬🔬 Vamos a experimentar 🧪🧪🔬🔬
  */
  
  return [ normalFunction, ConstructorFunction, normalAnonymousFunction, arrowFunction, objectWithMethods ]

 
  // new ClassEntityFunction()

  //normalAnonymousFunction()
  //arrowFunction()

  // Acá vemos el real impacto en los objetos el usar o no arrow. para objetos la recomendación es SIEMPRE usar function y para funciones fuera de objetos usar arrow function
  // objectWithMethods.methodNormalFunction()
  // objectWithMethods.methodArrowFunction()
}

function arrowFunctions() {
  this.customValue = true

  // arrow function 
  // const sumValues = (num1, num2) => {
  //   return num1 + num2
  // }

  // arrow function con retorno inmediato en una linea
  // const sumValues = (num1, num2) => num1 + num2

  // arrow function con un argumento y con retorno inmediato
  // const isAdult = age => age > 18

  // Un caso de uso para esta ultima
  // const childrensInList = peopleList.filter(person => person.age < 18)

  // arrow function que retorna un objeto
  // const sumValues = (num1, num2) => {
  //   return {
  //     total: num1 + num2
  //   }
  // }
  // // arrow function que retorna un objeto con retorno inmediato
  // const sumValues = (num1, num2) => ({ // aplicamos paréntesis porque sino se confunde con el bloque de función de las arrow function
  //   total: num1 + num2
  // })
}

module.exports = {
  // notar que dejamos de repetir el nombre de la llave y la variable
  thisInDifferentContexts,
  arrowFunctions,
}