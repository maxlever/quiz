import React, { Component } from 'react';
import './App.css';
import { SurveyData, SiteSettings } from './types';
import LoadingCircle from './loading';
import Survey from './survey';


type State = {
  survey: SurveyData
  settings: SiteSettings
}

type Props = {}

class App extends Component<Props, State> {
  state = {
    survey: {
      questions: [],
    },
    settings: { siteTitle: 'Survey' },
  }

  componentDidMount() {
    this.loadSurveyData('data/survey.json').then(survey => this.setState({ survey }));
    this.loadSurveyData('data/site.json').then(settings => this.setState({ settings }))
  }

  private loadSurveyData(url: string) {
    return fetch(url).then(res => res.json());
  }

  render() {
    let { survey, settings } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>{settings.siteTitle}</p>
          {Object.entries(survey.questions).length > 0
            ? <Survey {...survey} />
            : <LoadingCircle />}
        </header>
      </div>
    );
  }
}

export default App;
