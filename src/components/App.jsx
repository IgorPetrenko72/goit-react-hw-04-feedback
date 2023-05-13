import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notificate/Notification";
import './FeedbackOptions/Feedback.css';

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = { good, neutral, bad };
 
    const handleFeedback = statKey => {
    switch (statKey) {
      case 'good':
        setGood(pervState => pervState + 1);
        break;
      
       case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        console.log('Error');
    }
  };
  
  const total = () => {
    return (good + neutral + bad);
  }; 
  
  const percentage = () => { return Math.round(good / total() * 100) };

      return (
          <div className="feedback">
            <Section title="Please leave feedback">
                  <FeedbackOptions
                    options={Object.keys(feedback)}
                    onLeaveFeedback={handleFeedback}
                  />
            </Section>
          
            <Section title="Statistics">
            {total() !== 0 ?
           (<Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total()}
                    percentage={percentage()}
            />) :
                (<Notification massage="There is no feedback"/>)
        }    
            </Section>    
          </div>
        )
    }
export default App;