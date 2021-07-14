import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const points =[0,0,0,0,0,0,0]

  const [selected, setSelected] = useState(0)
  const [pointsSelected, setPointsSelected] = useState(points)

  const onHandleClick=()=>{
    setSelected(Math.floor(Math.random() * 6))
  }
  const onHandleClickVote=()=>{
    const copy=[...pointsSelected]
    copy[selected]+=1
    setPointsSelected(copy)
  }

  const mostVotesAnectode=()=>{
    let maxPoints=0
    let mostVoted=''
    for(let i=0;i<anecdotes.length;i++){
      if(pointsSelected[i]>maxPoints){
        mostVoted=anecdotes[i]
        maxPoints=pointsSelected[i]
      }
    }

    let mostVotedAnectode={
      text:mostVoted,
      points:maxPoints
    }
    return mostVotedAnectode
  }

  const mostVotedAnectode =mostVotesAnectode()

  return (
    <div>
      <h1>Anectode of the day</h1>
      {anecdotes[selected]}
      <div>has {pointsSelected[selected]}</div>
      <div>
      <button onClick={onHandleClickVote}>vote</button>
      <button onClick={onHandleClick}>next anectode</button>
      <h1>Anectode with most votes</h1>
      {mostVotedAnectode.text}
      <div>has {mostVotedAnectode.points}</div>
      </div>
    </div>
  )
}

export default App
