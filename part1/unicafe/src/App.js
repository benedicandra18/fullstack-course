import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const average = (g, n, b) => {
  return (g * 1 + n * 0 - 1 * b) / (g + n + b)
}

const positiveFeedback = (g, n, b) => {
  return g / (g + n + b) * 100
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feeback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={good + neutral + bad} />
          <Statistic text="average" value={average(good, neutral, bad)} />
          <Statistic text="positive" value={positiveFeedback(good, neutral, bad)} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={handleClickGood}></Button>
      <Button text='neutral' handleClick={handleClickNeutral}></Button>
      <Button text='bad' handleClick={handleClickBad}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App