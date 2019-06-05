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
    settings: {
      siteTitle: 'Quiz',
      background: { hex: '#000000' },
      text: { hex: '#ffffff' },
      accent: { hex: '#999999' },
    },
  }

  componentDidMount() {
    this.loadSurveyData('data/survey.json').then(survey => this.setState({ survey }));
    this.loadSurveyData('data/site.json').then(settings => this.setState({ settings }))
  }

  private loadSurveyData(url: string) {
    return fetch(url).then(res => res.json());
  }

  componentDidUpdate() {
    document.documentElement.style.setProperty('--primary', this.state.settings.background.hex);
    document.documentElement.style.setProperty('--secondary', this.state.settings.accent.hex);
    document.documentElement.style.setProperty('--text', this.state.settings.text.hex);
  }

  render() {
    let { survey, settings } = this.state;
    return (
      <div className="app">
        <header className="app-header">
          <h5 className="app-title">{settings.siteTitle}</h5>
          {Object.entries(survey.questions).length > 0
            ? <Survey {...survey} />
            : <LoadingCircle />}
        </header>
      </div>
    );
  }
}

export default App;
