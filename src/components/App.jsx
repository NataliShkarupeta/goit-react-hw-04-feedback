import React, { useState } from 'react';
import { Statistics, NameStatistics } from 'components/Statistics/Statistics';
import { Container } from './Default/Default.styled';
import {
  FeedbackOptions,
  TitlFeedback,
} from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Massage } from './Default/DefaultMassage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good * 100) / countTotalFeedback();
    return Math.round(positivePercentage);
  };

  const leaveReview = ({ target }) => {
    const { name } = target;
    if (name === 'good') setGood(propValue => propValue + 1);
    if (name === 'neutral') setNeutral(propValue => propValue + 1);
    if (name === 'bad') setBad(propValue => propValue + 1);
  };


  return (
    <Container>
      <Section>
        <TitlFeedback />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveReview}
        />
      </Section>
      <Section>
        <NameStatistics />
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Massage />
        )}
      </Section>
    </Container>
  );
};




