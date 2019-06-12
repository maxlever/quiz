import React, { Component } from 'react';
import Survey from '../survey';
import LoadingCircle from '../loading';
import { loadData } from '../util';
import { SurveyData, SiteSettings } from '../util/types';
import './index.css';

type State = {
  survey: SurveyData
  settings: SiteSettings
};

type Props = {};

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
    loadData('data/survey.json').then(survey => this.setState({ survey }));
    loadData('data/site.json').then(settings => this.setState({ settings }))
  }

  componentDidUpdate() {
    document.documentElement.style.setProperty('--primary', this.state.settings.background.hex);
    document.documentElement.style.setProperty('--secondary', this.state.settings.accent.hex);
    document.documentElement.style.setProperty('--text', this.state.settings.text.hex);
  }

  render() {
    const { survey, settings } = this.state;
    const hasQuestions: boolean = Object.entries(survey.questions).length > 0;
    return (
      <div className="app">
        <header className="app__header">
          <h5 className="app__title">{settings.siteTitle}</h5>
        </header>
        <main className="app__main">
          {hasQuestions
            ? <Survey {...survey} />
            : <LoadingCircle />}
        </main>
      </div>
    );
  }
}

export default App;
