import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [voteNum, setVoteNum] = useState([0, 0, 0, 0, 0, 0, 0])

  const nextAnecdote = () => {
    let value = Math.floor(Math.random() * 7);
    return (
      setSelected(value)
    )
  }

  const vote = () => {
    return (
      setVoteNum([...voteNum.slice(0,selected), voteNum[selected]+1, ...voteNum.slice(selected+1)])
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {voteNum[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[voteNum.indexOf(Math.max(...voteNum))]}
    </div>
  )
}

export default App