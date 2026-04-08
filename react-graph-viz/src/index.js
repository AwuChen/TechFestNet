import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as neo4j from  'neo4j-driver';

// TechFestNet Aura — override with REACT_APP_NEO4J_URI in .env if needed.
const driver = neo4j.driver(
  process.env.REACT_APP_NEO4J_URI || process.env.NEO4J_URI || 'neo4j+s://c9b42b11.databases.neo4j.io',
  neo4j.auth.basic(
    process.env.REACT_APP_NEO4J_USER || process.env.NEO4J_USER || 'neo4j',
    process.env.REACT_APP_NEO4J_PASSWORD || process.env.NEO4J_PASSWORD || 'dO3ucmPE8r6Iosz5A4bhVNSd0emZkwxsQ_8n6Galx2k'
  ),
  {
    //encrypted: process.env.NEO4J_ENCRYPTED ? 'ENCRYPTION_ON' : 'ENCRYPTION_OFF',
    //encrypted: process.env.NEO4J_ENCRYPTED = 'ENCRYPTION_ON',
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App driver={driver}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
