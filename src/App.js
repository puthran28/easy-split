import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './layout/Navbar';
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Dashboard from './Components/Dashboard';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
     <switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' component={Dashboard} />
    
     </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
