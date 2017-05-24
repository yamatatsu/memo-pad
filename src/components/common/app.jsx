import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

export default ({ mdText, handleChangeMdText }) => (
  <MuiThemeProvider>
    <div>
      <TextField
        hintText="ほげふが"
        floatingLabelText="自由記入"
        multiLine={true}
        onChange={e => handleChangeMdText(e.target.value)}
        value={mdText}
      />
      <br />
      <div>{mdText}</div>
    </div>
  </MuiThemeProvider>
)
