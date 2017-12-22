export const addLetter = (l) => ({
  type: 'ADD_LETTER',
  letter: l,
})

export const removeLetter = () => ({
  type: 'REMOVE_LETTER'
})

export const reset = () => ({
  type: 'RESET'
})

export const setValid = () => ({
  type: 'SET_VALID'
})

export const startGame = () => ({
  type: 'START_GAME'
})

//export default update
