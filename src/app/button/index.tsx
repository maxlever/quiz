import React, { Component } from 'react';
import './index.css';

type Props = {
  onClick: () => void,
  classes?: string
};

export default class Button extends Component<Props> {
  public static defaultProps = {
    classes: ""
  }
  render() {
    const { onClick, classes, children } = this.props;
    return (
      <button onClick={onClick} className={"button " + classes}>
        {children}  
      </button>
    );
  }
}