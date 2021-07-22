import React from 'react';
import css from 'styles/Page';
import Weather from './Weather';

export default function App() {
  return (
    <div className={css.container}>
      <h1>Weather Weather</h1>
      <Weather/>
    </div>
  );
}
