import { Position, PositionBlock } from './Statistics.slyled';
import { Name } from './Statistics.slyled';
import PropTypes from 'prop-types';

export const Statistics = props => {
  const { good, neutral, bad, positivePercentage, total } = props;
  return (
    <PositionBlock>
      <Position>Good: {good}</Position>
      <Position>Neutral: {neutral}</Position>
      <Position>Bad: {bad}</Position>
      <Position>Total: {total}</Position>
      <Position>Positive feedback:{positivePercentage}%</Position>
    </PositionBlock>
  );
};

export const NameStatistics = () => {
  return <Name>Statistics</Name>;
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
