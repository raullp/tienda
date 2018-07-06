import React  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Principal from './Principal';
import Login from './Login';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Principal} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
