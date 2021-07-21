const {
  functionHoisting,
  varHoisting,
  letHoisting,
  constHoisting,
  blockScopeHoisting
} = require('./01_hoisting');

describe('Hoisting', () => {
  it('Function Hoisting', ()=>{
    expect(functionHoisting()).toEqual('Mira mamá! Ya llegué')
  })

  it('Var Hoisting', ()=>{
    expect(varHoisting()).toEqual(undefined)
  })

  it('Let Hoisting', ()=>{
    expect(() => {
      letHoisting()
      }).not.toThrow()
  })

  it('Const Hoisting', ()=>{
    const [ constVar, constFunction ] = constHoisting() 
    
    expect(constVar).toEqual('No se te ocurra inicializar una const sin asignar')

    expect(constFunction()).toEqual('Hola desde una const')
  })

  it('Block scope Hosting', ()=>{
    expect(()=>{
      blockScopeHoisting()
    }).not.toThrow()
  })
})
