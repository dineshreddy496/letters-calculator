import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeLettersCount = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="container">
        <div className="letters-calculator-container">
          <div className="count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <form className="form-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                className="letters-input"
                id="phraseText"
                placeholder="Enter the phrase"
                onChange={this.onChangeLettersCount}
              />
            </form>
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters-count"
              className="letters-count-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
