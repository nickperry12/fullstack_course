import { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  const stats = [props.good, props.bad, props.neutral];

  if (stats.every(stat => stat === 0)) {
    return (
      <div>
        <h1>{props.text}</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>{props.text}</h1>
        <table>
          <tbody>
            <tr>
              <th>good</th>
              <td><StatisticLine value={`good ${props.good}`} /></td>
            </tr>
            <tr>
              <th>neutral</th>
              <td><StatisticLine text='neutral' value={`neutral ${props.neutral}`} /></td>
            </tr>
            <tr>
              <th>bad</th>
              <td><StatisticLine text='bad' value={`bad ${props.bad}`} /></td>
            </tr>
            <tr>
              <th>all</th>
              <td><StatisticLine text='all' value={`all ${props.all}`} /></td>
            </tr>
            <tr>
              <th>average</th>
              <td><StatisticLine text='average' value={`average ${props.average}`} /></td>
            </tr>
            <tr>
              <th>average</th>
              <td><StatisticLine text='positive' value={`positive ${props.positive}%`} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const StatisticLine = (props) => {
  return(
    <p>{props.value}</p>
  )
}

const Display = () => {
  return(
    <>
      <h1>give feedback</h1>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (newValue, func) => {
    return () => {
      console.log('new value: ', newValue)
      func(newValue);
    }
  }

  const getAverage = () => {
    return ((good * 1) + (bad * -1) + (neutral * 0)) / all;
  }

  const all = good + bad + neutral;
  const average =  all === 0 ? 0 : getAverage();
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <div>
      <Display goodBtnText='good' neutralBtnText='neutral' badBtnText='bad' />
      <Button text='good' handleClick={handleClick(good + 1, setGood)} />
      <Button text='neutral' handleClick={handleClick(neutral + 1, setNeutral)} />
      <Button text='bad' handleClick={handleClick(bad + 1, setBad)} />
      <Statistics text='statistics'
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App;