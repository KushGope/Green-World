import './App.css';
import {Route,Switch} from 'react-router-dom';
import {useLocalStorage} from 'react-use';
import Navbar from './components/Navbar';
import All from './components/All';
import Category from './components/Category';
import Profile from './components/Profile';
import Seller from './components/Seller';
import Buyer from './components/Buyer';
import Login from './components/Login';

function App() {
  const [Signed,SetSigned] = useLocalStorage('Signed', true); 
  return (
    <div>
        
    
      <main>
        <Navbar sign={Signed} setsign={SetSigned}/>
        <Switch>
                <Route path='/' component={All} exact/>
                <Route path='/category/:id' component={Category} exact/>
                <Route path='/Login' component={Login} exact/>
                <Route path='/seller-signup' component={Seller} exact/>
                <Route path='/buyer-signup/' component={Buyer} exact/>
                <Route path='/profile/' component={Profile} exact/>
          </Switch>
      </main>
      <div id="preloader"></div>
    </div>
  );
}

export default App;
