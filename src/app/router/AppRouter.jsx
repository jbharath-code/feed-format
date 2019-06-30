import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';

const appRoutes = (
    <div>
        <Route path="/" component={AppContainer} />
    </div>
);

const AppRouter = () => <HashRouter>{appRoutes}</HashRouter>;

export default AppRouter;
