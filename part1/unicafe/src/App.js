import { useState } from 'react'

const Stats = ({good, neutral, bad}) => {
  let all = good + neutral + bad
  let average = (good - bad) / all
  let positive = 100.0 * good / all

  if (all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  
  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </>
  )
}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <p>{props.text} {props.value} % </p>
    )
  }
  return (
    <p>{props.text} {props.value} </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const name = "give feedback"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Title = (props) => <h1>{props.name}</h1>

  const ButtonPart = () => {
    return (
      <>
        <Button type={goodUpdate} text="good" />
        <Button type={neutralUpdate} text="neutral" />
        <Button type={badUpdate} text="bad" />
      </>
    )
  }

  const goodUpdate = () => {
    return setGood(good + 1)
  }

  const neutralUpdate = () => {
    return setNeutral(neutral + 1)
  }

  const badUpdate = () => {
    return setBad(bad + 1)
  }

  const Button = ({type, text}) => (
    <button onClick={type}>
      {text}
    </button>
  )


  return (
    <div>
      <Title name={name}></Title>
      <ButtonPart></ButtonPart>
      <Stats good={good} neutral={neutral} bad={bad}></Stats>
    </div>
  )
}

export default App