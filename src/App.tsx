import React from 'react';
import { Router } from '@reach/router';
import { Home } from './pages';

export default function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}
