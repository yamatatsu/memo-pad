const initialState = {
  mdText: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'handle_edit_md_text': {
      return { ...state, mdText: action.mdText }
    }
    default: {
      return state
    }
  }
}
