import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {phraseInput: ''}

  onChangePhrase = event => {
    this.setState({phraseInput: event.target.value})
  }

  render() {
    const {phraseInput} = this.state
    return (
      <div className="bg-container">
        <div className="cal-con">
          <h1 className="heading">
            Calculate the <br /> Letters you enter
          </h1>
          <form>
            <label htmlFor="search-box" className="text-phase">
              Enter the phrase
            </label>
            <input
              type="text"
              id="search-box"
              className="input-box"
              placeholder="Enter the phrase"
              onChange={this.onChangePhrase}
              value={phraseInput}
            />
          </form>
          <p className="lettersCount">No.of letters: {phraseInput.length}</p>
        </div>
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="cal-img"
            alt="calulator-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
