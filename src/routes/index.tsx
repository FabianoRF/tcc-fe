import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Sign-in';
import SignUp from '../pages/Sign-up';

import ResetPassword from '../pages/ResetPassword';
import SocioDemographicForm from '../pages/SocioDemographicForm';
import ClinicForm from '../pages/ClinicForm';
import RiskAssessment from '../pages/RiskAssessment';
import Measures from '../pages/Measures';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/socio-form" component={SocioDemographicForm} />
    <Route path="/clinic-form" component={ClinicForm} />
    <Route path="/risk-assessment" component={RiskAssessment} />
    <Route path="/measures" component={Measures} />
  </Switch>
);

export default Routes;
