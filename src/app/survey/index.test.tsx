import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMTestUtils from 'react-dom/test-utils';
import Survey from '.';
import { SurveyQuestions } from '../util/types';

let div: Element, questions: SurveyQuestions;

beforeEach(() => {
  div = document.createElement('div');
  questions = [
    {
      id: "1",
      text: "What's the first letter of the alphabet?",
      choices: [
        {
          id: "a",
          text: "A",
          position: 0,
        },
        {
          id: "b",
          text: "B",
          position: 1,
        }
      ],
      position: 0,
      correctChoice: { id: "a" },
    },
    {
      id: "2",
      text: "What's the smallest number?",
      choices: [
        {
          id: "0",
          text: "0",
          position: 0,
        },
        {
          id: "5",
          text: "5",
          position: 1,
        }
      ],
      position: 1,
      correctChoice: { id: "0" },
    }
  ]

})

it('renders without crashing', () => {
  ReactDOM.render(<Survey questions={questions} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows the first question', () => {
  ReactDOMTestUtils.act(() => {
    ReactDOM.render(<Survey questions={questions} />, div);
  });

  const question = div.querySelector('.question__text');
  const choiceA = div.querySelector('.choice .button');
  expect(question && question.textContent).toBe(questions[0].text);
  expect(choiceA && choiceA.textContent).toBe(questions[0].choices[0].text);
})

it('shows the next question when the first is answered', (done) => {
  ReactDOMTestUtils.act(() => {
    ReactDOM.render(<Survey questions={questions} />, div);
  });

  const choiceA = div.querySelector('.choice .button');
  choiceA && ReactDOMTestUtils.Simulate.click(choiceA);

  setTimeout(() => {
    const newQ = div.querySelector('.question__text');
    expect(newQ && newQ.textContent).toBe(questions[1].text);
    done();
  }, 1100);
});

it('shows the end result', (done) => {
  ReactDOMTestUtils.act(() => {
    ReactDOM.render(<Survey questions={questions} />, div);
  });

  const choiceA = div.querySelector('.choice .button');
  choiceA && ReactDOMTestUtils.Simulate.click(choiceA);
  expect(choiceA && choiceA.textContent).toBe(questions[0].choices[0].text);

  setTimeout(() => {
    const choice0 = div.querySelector('.choice .button');
    expect(choice0 && choice0.textContent).toBe(questions[1].choices[0].text);
    choice0 && ReactDOMTestUtils.Simulate.click(choice0);
  }, 1100);

  setTimeout(() => {
    const end = div.querySelector('.end');
    expect(end && end.textContent).toBe("You answered 2 out of 2 questions correctly.");
    done();
  }, 2200);

})
