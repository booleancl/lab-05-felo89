function functionHoisting() {     
  return someFunction()

  function someFunction(){
    return('Mira mamá! Ya llegué');
  }
}

function varHoisting(){
  
  return someVariable
  var someVariable = 'Si me usas antes de asignarme seré undefined'
  // var someVariable
}

function letHoisting(){
  let someVariable 
  someVariable = 'Si me usas antes de dejaré la $#%$%&"#$'
  
  return someVariable
}

function constHoisting(){
  // const someVariable
  const someVariable = 'No se te ocurra inicializar una const sin asignar'
  
  const someFunction = function(){
    return "Hola desde una const"
  }
  
  return [ someVariable, someFunction ]
}

function blockScopeHoisting() {
  // ¿ La siguiente expresión arrojará algún error? 
  
  {{ {} }}

  {
   //  Block Scope
  }
  let value

  for(let index = 0; index < [1,2,3].length; index++) {
    //  Block Scope
    console.log(index)
  }
  
  // var value = 0
  // let value = 0
  //const value = 0
  if (value === 0) {
    //  Block Scope
    value = 10
    var newValue = 0
    //  const newValue = 0
    console.log(value, newValue)
  }

  console.log(value, newValue)
}

module.exports = {
  functionHoisting: functionHoisting,
  varHoisting: varHoisting,
  letHoisting: letHoisting,
  constHoisting: constHoisting,
  blockScopeHoisting: blockScopeHoisting
} 