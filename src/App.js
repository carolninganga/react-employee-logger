import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import SearchBar from './components/layout/SearchBar';
import M from 'materialize-css/dist/js/materialize';
import './App.css';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar />
    </Fragment>
  );
}

export default App;
