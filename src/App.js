import React from 'react';
import { Route } from 'react-router-dom'
import { container as Login } from './components/login';
import { view as Home } from './pages'
const App = () => {
  return (
    <>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
    </>
  );
};

export default App;
