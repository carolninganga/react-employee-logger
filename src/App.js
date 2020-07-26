import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import AddLogModel from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditlogModal';
import AddTechModel from './components/techs/AddTechModal';

import Logs from './components/logs/Logs';
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
      <div className='container'>
        <AddBtn />
        <AddLogModel />
        <EditLogModal />
        <AddTechModel />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
