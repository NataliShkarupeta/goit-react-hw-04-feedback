import React, { Component } from 'react';
import { Statistics, NameStatistics } from 'components/Statistics/Statistics';
import { Container } from './Default/Default.styled';
import {
  FeedbackOptions,
  TitlFeedback,
} from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Massage } from './Default/DefaultMassage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercentage = (good * 100) / this.countTotalFeedback();
    return Math.round(positivePercentage);
  };

  leaveReview = event => {
    const key = event.target.name;

    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Section>
          <TitlFeedback />
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.leaveReview}
          />
        </Section>
        <Section>
          <NameStatistics />
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Massage />
          )}
        </Section>
      </Container>
    );
  }
}
