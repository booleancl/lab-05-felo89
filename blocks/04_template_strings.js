function templateStrings() {
  const baseText = 'Hola'
  const user = 'Buster'

  const welcomeText = `\nEstimado ${user}\n`
    + 'Tenemos el agrado de comunicarle que ha sido seleccionado\n'
    + 'para la beca\n'
    + 'saludos cordiales'
  
  return {
    textWithUser: `${baseText} ${user}`,
    welcomeText
  }
}

module.exports = {
  templateStrings,
}