import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.timeID = null
    this.state = {
      date: new Date()
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Clock