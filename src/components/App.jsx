import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const countTotal = () => {
    return good + bad + neutral;
  };
  const countPercent = () => {
    return (good / countTotal()) * 100;
  };
  return (
    <>
      <h2>Please leave feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      {countTotal() ? (
        <>
          <h2>Statistic</h2>
          <p>good: {good}</p>
          <p>neutral: {neutral}</p>
          <p>bad: {bad}</p>
          <p>Total: {countTotal()}</p>
          <p>Positive feedback: {countPercent()} %</p>
        </>
      ) : (
        <h2>not feedback</h2>
      )}
    </>
  );
};

export default App;
