import { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const DisplayDaily = (props) => {
  return (
    <>
      <h1>Anecdote of the Day</h1>
      {props.anecdote}
      <div>
        <p>has {props.votes} votes</p>
      </div>
    </>
  )
}

const DisplayMostVoted = (props) => {
  let values = Object.values(props.votes);
  let max = values.sort((a, b) => b - a)[0];
  let mostVoted = Object.keys(props.votes).find(key => {
    return props.votes[key] === max;
  });

  return (
    <>
      <h1>Anecdote With Most Votes</h1>
      <p>{props.anecdotes[mostVoted]}</p>
      <p>has {max} votes</p>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const initialVotes = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  };

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes);

  const handleNextClick = () => {
    return () => {
      let newIndex = Math.floor(Math.random() * anecdotes.length);
      setSelected(newIndex);
    }
  }

  const handleVoteClick = () => () => {
    let votesCopy = { ...votes };
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  }

  return (
    <div>
      <DisplayDaily anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <div>
        <Button text='vote' handleClick={handleVoteClick()} />
        <Button text='next anecdote' handleClick={handleNextClick()} />
      </div>
      <div>
        <DisplayMostVoted anecdotes={anecdotes} votes={votes}/>
      </div>
    </div>
  )
}

export default App;
