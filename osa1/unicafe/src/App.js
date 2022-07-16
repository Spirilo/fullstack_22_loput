import { useState } from 'react'

const Header = ({ text }) => <h2>{text}</h2>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine= ({ text, value}) => <tr><td>{text} {value}</td></tr>

const Statistics = (props) => {
  let allSum = props.good + props.neutral + props.bad
  let allAvrg = (props.good - props.bad) / allSum
  let allPos = props.good / allSum * 100

  if (allSum == 0){
    return(
      <div>No feedback given</div>
    )
  }
  return(
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={allSum} />
        <StatisticLine text='average' value={allAvrg} />
        <StatisticLine text='positive' value={allPos} />
      </tbody>    
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App