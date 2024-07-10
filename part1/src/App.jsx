import {useState} from 'react';

const Display = ({ left, right}) => {
  return (
    <>
      {left}
      {right}  
    </>
  )
}

const History = ({ clicks }) => {
  
  if (clicks.length === 0) {
    return (
      <>
        <p>The app is used by pressing the buttons</p>
      </>
    )
  }

  return (
    <>
      <p>Button click history: {clicks.join(', ')}</p>
    </>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    console.log('left clicked, left after: ', updatedLeft);
    setTotal(updatedLeft + right);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    console.log('right clicked, right after: ', updatedRight);
    setTotal(left + updatedRight);
  }

  return (
    <div>
      <Display left={left} />
      {' '}
      <Button
        text='left'
        onClick={handleLeftClick}
      />
      {' '}
      <Display right={right} />
      {' '}
      <Button
        text='right'
        onClick={handleRightClick}
      />
      {' '}
      <History clicks={allClicks} />
      <p>Total clicks: {total}</p>
    </div>
  )
}

export default App;
