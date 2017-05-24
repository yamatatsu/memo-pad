import { connect } from 'react-redux'

import App from '../components/common/app'

const mapStateToProps = (state) => {
  return {
    mdText: state.mdText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeMdText: mdText => {
      dispatch({ type: 'handle_edit_md_text', mdText })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
