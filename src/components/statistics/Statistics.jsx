import Proptypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: Proptypes.number.isRequired,
  neutral: Proptypes.number.isRequired,
  bad: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
  positivePercentag: Proptypes.number,
};