import React from 'react';
import { Route } from 'react-router-dom'
import { container as Login } from './components/login';

const App = () => {
  return (
    <>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login}/>
    </>
  );
};

export default App;
