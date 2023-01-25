import React from 'react';
import { ButtonBlock, BaseStyles } from 'components/Default/Default.styled';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBlock>
      {options.map(item => {
        return (
          <Button key={item} onClick={onLeaveFeedback} name={item}>
            {item}{' '}
          </Button>
        );
      })}
    </ButtonBlock>
  );
};

export const TitlFeedback = () => {
  return <BaseStyles>Please leave feedback</BaseStyles>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
