const {
  templateStrings
} = require('./04_template_strings');

describe('Access Levels', () => {
  it('handle objects with new syntax', () => {
    const {
      textWithUser,
      welcomeText
    } = templateStrings()

    const user = 'Buster'

    expect(textWithUser).toEqual(`Hola ${user}`)
    
    const expectedText = `
Estimado ${user}
Tenemos el agrado de comunicarle que ha sido seleccionado
para la beca
saludos cordiales`

    expect(welcomeText).toEqual(expectedText)

  })

})
