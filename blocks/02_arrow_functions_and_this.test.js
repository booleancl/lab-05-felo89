
const {
  thisInDifferentContexts,
  arrowFunctions
} = require('./02_arrow_functions_and_this');

describe('This in different contexts', () => {
  const [
    normalFunction,
    constructorFunction,
    normalAnonymousFunction,
    arrowFunction,
    objectWithMethods 
    ] = thisInDifferentContexts()

  it('This in normal Function', ()=>{
    expect(normalFunction()).toEqual(true)
    thisInDifferentContexts()
  })

  it('This in normal Function with bind', ()=>{
    expect(normalFunction.bind({customValue: true})()).toEqual(true)
  })

  it('This in normal Function with call and apply', () => {
    /* Difference between call() and apply() method: The only difference is call() method takes the arguments separated by comma while apply() method takes the array of arguments. */
    expect(normalFunction.call({ customValue: true })).toEqual(true)
    expect(normalFunction.apply({ customValue: true })).toEqual(true)
  })

  it('This in constructor Function', ()=>{
    const newInstance = new constructorFunction()
    expect(newInstance).toEqual({ myProperty: 2 })
    thisInDifferentContexts()
  })

  it('This in constructor Function', ()=>{
    const newInstance = new constructorFunction()
    expect(newInstance).toEqual({ myProperty: 2 })
  })

  it('This in anonymous Function', ()=>{
    expect(normalAnonymousFunction()).toEqual(true)
  })

  it('This in arrow Function', ()=>{
    expect(arrowFunction()).toEqual(true)
  })

  it('This in Objects with functions', ()=>{
    expect(objectWithMethods.methodNormalFunction()).toBe(undefined)
    expect(objectWithMethods.methodArrowFunction()).toBe(true)
  })

})
