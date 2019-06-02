import React, { Component } from 'react';
import './App.css';
import { SurveyData } from './types';
import LoadingCircle from './loading';
import Survey from './survey';


type State = {
  survey: SurveyData
}

type Props = {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      survey: {
        questions: {},
      }
    }
  }

  componentDidMount() {
    this.loadSurveyData().then(survey => this.setState({ survey }));
  }

  private loadSurveyData() {
    return fetch('data/home.json').then(res => res.json());
  }

  render() {
    let { survey } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>Survey</p>
          {Object.entries(survey.questions).length > 0
            ? <Survey {...survey} />
            : <LoadingCircle />}
        </header>
      </div>
    );
  }
}

export default App;
