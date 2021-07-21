function functionHoisting() {     
  return someFunction

  function someFunction(){
    return('Mira mamá! Ya llegué');
  }
}

function varHoisting(){
  var someVariable
  someVariable = 'Si me usas antes de asignarme seré undefined'
  
  return someVariable
}

function letHoisting(){
  return someVariable

  let someVariable 
  someVariable = 'Si me usas antes de dejaré la $#%$%&"#$'
}

function constHoisting(){
  return [ someVariable, someFunction ]
  
  // const someVariable
  const someVariable = 'No se te ocurra inicializar una const sin asignar'

  const someFunction = function(){
    return "Hola desde una const"
  }

}

function blockScopeHoisting() {
  // ¿ La siguiente expresión arrojará algún error? 
  
  {{ {} }}

  {
   //  Block Scope
  }

  for(let index = 0; index < [1,2,3].length; index++) {
    //  Block Scope
    console.log(index)
  }

  console.log(index)
  
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