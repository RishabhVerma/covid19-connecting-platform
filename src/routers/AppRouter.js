import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../utils/history';

import NotFoundPage from '../components/NotFoundPage';

import EnablerPage from '../screens/Enabler';
import CovidLandingPage from '../screens/LandingPage';
import PeopleInNeedPage from '../screens/PeopleInNeed';
import LivelihoodSupport from '../screens/LivelihoodSupport';
import Transportation from '../screens/Transportation';
import MentalHealth from '../screens/MentalHealth';

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={CovidLandingPage} exact={true} />
      <Route path="/enablerLanding" component={EnablerPage} exact={true} />
      <Route path="/peopleInNeed" component={PeopleInNeedPage} exact={true} />
      <Route path="/livelihoodSupport" component={LivelihoodSupport} exact={true}/>
      <Route path="/gharKiAas" component={Transportation} exact={true} />
      <Route path="/mentalHealthSupport" component={MentalHealth} exact={true}/>
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;