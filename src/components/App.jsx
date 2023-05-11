import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notificate/Notification";
import './FeedbackOptions/Feedback.css';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };

   handleFeedback = e => {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentage = Math.round(good / this.countTotalFeedback() * 100);
    return percentage;
  };

  render() {
      const { good, neutral, bad } = this.state;
      return (
          <div className="feedback">
            <Section title="Please leave feedback">
                  <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.handleFeedback}
                  />
            </Section>
          
            <Section title="Statistics">
            {this.countTotalFeedback() !==0 ?
           (<Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    percentage={this.countPositiveFeedbackPercentage()}
            />) :
                (<Notification massage="There is no feedback"/>)
        }    
            </Section>    
          </div>
        )
    }
}