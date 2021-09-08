import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './pages/footer/Footer';

import Layout from './pages/Layout';
import {GlobalStyle} from './styles/global.styles';
import Routes from './routes/index';



function App() {
    return (
        <div>
            <Layout>
              <Router>
              <GlobalStyle />
                <Routes />
              </Router>
              {
              location.pathname !== '/login' &&
              location.pathname !== '/users' &&
              location.pathname !== '/topic1' &&
              location.pathname !== '/topic2' &&
              location.pathname !== '/topic3' &&
              location.pathname !== '/signup' && <Footer/>}
          </Layout>
      </div>
    );
}

export default App;

