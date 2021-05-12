import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
<BrowserRouter>
 <Route exact path="/" component={Home}/>  
 <Route exact path="/login" component={Login}/>
</BrowserRouter>
); //return explicito
//en la "/" del archivo que busque el componente Home, antes denominado App


export default App;
