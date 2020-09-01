import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import { Layout } from './Layout';
import './common/i18n';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/chat' component={Layout} exact />
      <Route path='/chat/:id' component={Layout} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);