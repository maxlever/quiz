import React, { Component } from 'react';
import './index.css';

type Props = {
  onClick: () => void
}
export default class Button extends Component<Props> {
  render() {
    return (<button onClick={this.props.onClick} className="button">
        {this.props.children}
      </button>);
  }
}