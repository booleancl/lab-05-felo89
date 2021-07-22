
function objectsHandling() {
  // FORMA ES5
  // var user = {
  //   name: 'Freddy',
  //   lastName: 'Turbina',
  //   address: 'avda siempre viva 2022',
    
  //   getFullName: function () {
  //     return this.name + ' ' + this.lastName
  //   }
  // }
  // var name = user.name
  // var address = user.address

  // return {
  //   name: name,
  //   address: address,
  // }

  // FORMA ES6
  const user = {
    name: 'Freddy',
    lastName: 'Turbina',
    address: 'avda siempre viva 2022',
    // ¿esto funcionara?
    //getFullName: () => this.name + ' ' + this.lastName
    // no lleva ":" para definir la llave si este es un método 
    getFullName() {
      return this.name + ' ' + this.lastName
    }
  }
  // const name = user.name
  // const address = user.address
  // equivalente a 
  const { name, address } = user

  //console.log(user.getFullName())
  return {
    name,
    address,
  }
}

function destructuringObjects() {
  //¿podemos reducir algo la sintaxis aqui?
  // const textWithUnderscores = (text) => text.words.join('_')
  const textWithUnderscores = ({ words }) => words.join('_')

  const words = ['Destructing', 'help','us', 'to','reduce', 'lines', 'of', 'code']

  const text = {
    author: 1,
    words,
  }

  const result = {
    id: 1,
    description: 'the filename text',
    filename: textWithUnderscores(text),
  }
  //¿por que se puede modificar el objeto si es de tipo const?
  //Me parece que hay algo mal acá 🤔
  // const resultCopy = result
  // result.id = 2
  const resultCopy = {
    ...result,
    id: 2,
  }

  return {
    result,
    resultCopy,
  }
}

function destructuringArrays() {
  const points = [100, 1000, 10000, 100000, 1000000]
  // const firstValue = points[0]
  const [firstValue] = points
  const difficultyLevels = [
    'easy',
    'normal',
    'hard',
    'very hard',
  ]
  // const firstDifficulty = difficultyLevels[0]
  const hardDifficulty = difficultyLevels[2]
  // const mediumLevels = difficultyLevels.slice(1,-1)
  // const levelsWithoutEasy = difficultyLevels.slice(1)
  
  // nos falta mediumLevels y levelsWithoutEasy
  // const [firstDifficulty,,hardDifficulty] = difficultyLevels
  
  const [firstDifficulty, ...levelsWithoutEasy] = difficultyLevels
  const mediumLevels = difficultyLevels.slice(1,-1)
  // const [,,hardDifficulty] = difficultyLevels // mejor mantener difficultyLevels[2]
  
  return [ firstValue, firstDifficulty, hardDifficulty, mediumLevels, levelsWithoutEasy ]
}

module.exports = {
  objectsHandling,
  destructuringObjects,
  destructuringArrays,
}