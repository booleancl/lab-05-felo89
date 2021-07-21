function templateStrings() {
  const baseText = 'Hola'
  const user = 'Buster'

  const welcomeText = '\nEstimado' + ' ' + usuario + '\n'
    + 'Tenemos el agrado de comunicarle que ha sido seleccionado\n'
    + 'para la beca '
    + 'saludos cordiales'
  
  return {
    textWithUser: baseText + ' ' + usuario,
    welcomeText
  }
}


module.exports = {
  templateStrings,
}