const {
  objectsHandling,
  destructuringObjects,
  destructuringArrays
} = require('./03_working_with_objects');

describe('Access Levels', () => {
  it('handle objects with new syntax', () => {
    const result = objectsHandling()

    expect(result.name).toEqual('Freddy')
    expect(result.address).toEqual('avda siempre viva 2022')
  })

  it('handle objects with destructuring', () => {
    const { result, resultCopy } = destructuringObjects()

    expect(result).toEqual({
      id: 1,
      description: 'the filename text',
      filename: 'Destructing_help_us_to_reduce_lines_of_code'
    })
    expect(resultCopy).toEqual({
      id: 2,
      description: 'the filename text',
      filename: 'Destructing_help_us_to_reduce_lines_of_code'
    })
  })

  it('handle arrays with destructuring', ()=>{
    const [first, second, third, forth, fifth ] = destructuringArrays()

    expect(first).toEqual(100)
    expect(second).toEqual('easy')
    expect(third).toEqual('hard')
    expect(forth).toEqual(['normal','hard'])
    expect(fifth).toEqual(['normal','hard', 'very hard'])
  })
})
