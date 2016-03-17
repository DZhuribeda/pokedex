import React, { Component } from 'react'
import Radium from 'radium'

class Header extends Component {

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Pokemon</h1>
      </div>
    )
  }
}

Header = Radium(Header)
export default Header