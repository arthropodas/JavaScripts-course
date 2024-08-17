import logo from './logo.svg';
import './App.css';
import CakeComponent from './components/CakeComponent';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamComponent from './components/IceCreamComponent';
import NewCakeComponent from './components/NewCakeComponent';

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      
      <CakeComponent/>
      <HooksCakeContainer/>
      <IceCreamComponent/>
      <NewCakeComponent/>
    </div>
    </Provider>
  );
}

export default App;
