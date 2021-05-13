import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
<BrowserRouter>
 <Layout>
      <Switch>
         <Route exact path="/" component={Home}/>  
         <Route exact path="/login" component={Login}/>
         <Route exact path="/register" component={Register}/>
         <Route  component={NotFound}/>
      </Switch>
 </Layout> 
 
</BrowserRouter>
); //return explicito
//en la "/" del archivo que busque el componente Home, antes denominado App


export default App;
