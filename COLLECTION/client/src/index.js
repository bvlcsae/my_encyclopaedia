import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from "react-hot-loader";
import Clock from 'components/Clock'

class App extends React.Component {
  render() {
    return <div>
      <Clock />
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)