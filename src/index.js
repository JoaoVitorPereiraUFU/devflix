import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" exact component={CadastroVideo} />
      <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
      <Route component={() => (<div>Página 404</div>)} /> {/* Para casos de erro 404  */}

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

