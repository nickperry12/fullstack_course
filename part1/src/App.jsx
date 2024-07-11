import { useState } from 'react';

// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>{props.text}</button>
//   )
// }

// const Statistics = (props) => {
//   const stats = [props.good, props.bad, props.neutral];

//   if (stats.every(stat => stat === 0)) {
//     return (
//       <div>
//         <h1>{props.text}</h1>
//         <p>No feedback given</p>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <h1>{props.text}</h1>
//         <table>
//           <tbody>
//             <tr>
//               <th>good</th>
//               <td><StatisticLine value={`good ${props.good}`} /></td>
//             </tr>
//             <tr>
//               <th>neutral</th>
//               <td><StatisticLine text='neutral' value={`neutral ${props.neutral}`} /></td>
//             </tr>
//             <tr>
//               <th>bad</th>
//               <td><StatisticLine text='bad' value={`bad ${props.bad}`} /></td>
//             </tr>
//             <tr>
//               <th>all</th>
//               <td><StatisticLine text='all' value={`all ${props.all}`} /></td>
//             </tr>
//             <tr>
//               <th>average</th>
//               <td><StatisticLine text='average' value={`average ${props.average}`} /></td>
//             </tr>
//             <tr>
//               <th>average</th>
//               <td><StatisticLine text='positive' value={`positive ${props.positive}%`} /></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

// const StatisticLine = (props) => {
//   return(
//     <p>{props.value}</p>
//   )
// }

// const Display = () => {
//   return(
//     <>
//       <h1>give feedback</h1>
//     </>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleClick = (newValue, func) => {
//     return () => {
//       console.log('new value: ', newValue)
//       func(newValue);
//     }
//   }

//   const getAverage = () => {
//     return ((good * 1) + (bad * -1) + (neutral * 0)) / all;
//   }

//   const all = good + bad + neutral;
//   const average =  all === 0 ? 0 : getAverage();
//   const positive = all === 0 ? 0 : (good / all) * 100;

//   return (
//     <div>
//       <Display goodBtnText='good' neutralBtnText='neutral' badBtnText='bad' />
//       <Button text='good' handleClick={handleClick(good + 1, setGood)} />
//       <Button text='neutral' handleClick={handleClick(neutral + 1, setNeutral)} />
//       <Button text='bad' handleClick={handleClick(bad + 1, setBad)} />
//       <Statistics text='statistics'
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         all={all}
//         average={average}
//         positive={positive}
//       />
//     </div>
//   )
// }
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
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
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0);

  const handleNextClick = () => {
    return () => {
      let newIndex = Math.floor(Math.random() * anecdotes.length);
      setSelected(newIndex);
      setVotes(0);
    }
  }

  const handleVoteClick = () => () => {
    let newVotes = votes + 1;
    setVotes(newVotes);
    console.log('total is now: ', newVotes);
  }

  return (
    <div>
      {anecdotes[selected]}
      <div>
        has {votes} votes
      </div>
      <div>
        <Button text='vote' handleClick={handleVoteClick()} />
        <Button text='next anecdote' handleClick={handleNextClick()} />
      </div>
    </div>
  )
}

export default App
