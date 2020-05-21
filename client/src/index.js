  
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import "./index.css";
import App from "./App";
import { FirebaseAppProvider }from 'reactfire';
import firebaseConfig from './firebase-config';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Cargando la app...Tranqui :)'}>
        <Router>
            <App/>
        </Router>
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

