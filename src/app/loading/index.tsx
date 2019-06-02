import React from 'react';
import './index.css';

export default function LoadingCircle() {
  return (
    <div className="loading-static">
      <div className="circular-static">
        <svg className="circle" viewBox="0 0 60 60">
          <circle className="path" cx='30' cy='30' r='25' />
        </svg>
      </div>
    </div>
  );
};