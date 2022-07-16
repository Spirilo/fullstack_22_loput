import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>

const Anecdote = ({text, points}) => (
  <>
    <p>{text}</p>
    <p>has {points} points</p>
  </>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Most = ({anecdotes, points}) => {
  const mostVotes = Math.max(...points)
  const mostIndex = points.indexOf(mostVotes)
  const best = anecdotes[mostIndex]
  if (mostVotes == 0){
    return(
      <p>NO VOTES</p>
    )
  }
  return(
    <>
      <p>{best}</p>
      <p>has {mostVotes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const [points, setPoints] = useState(Array(7).fill(0))
  const [selected, setSelected] = useState(0)
  
  const randomize = () => setSelected(Math.floor(Math.random() * 7))

  const vote = () => {
    const copyVotes = [...points]
    copyVotes[selected] += 1
    setPoints(copyVotes)
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} points={points[selected]} />   
      <Button handleClick={vote} text='vote' />
      <Button handleClick={randomize} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <Most anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App
