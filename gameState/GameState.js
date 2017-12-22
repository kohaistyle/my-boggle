
function gameState(state = {word: '', score: 0, play: 0, valid: false}, action) {

  console.log('s',state);
  //console.log('a',action);

  switch (action.type) {
  case 'ADD_LETTER':
    var res = {
      word: state.word+action.letter,
    }
    console.log(res)
    return res
  case 'REMOVE_LETTER':
    if(state.word != '')
      return {word: state.word.slice(0, -1)}
    else
      return state
  case 'RESET':
    return {word: ''}
  case 'START_GAME':
    return {play: 1}
  case 'SET_VALID':
    return {valid: true}
  default:
    return state
  }
}

export default gameState
