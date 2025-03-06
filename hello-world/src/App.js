import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
//import {Greet} from './components/Greet' //This should be used for named exports
function App() {
  return (
    //To include Greet component in App component we simply specify the component as the custom html tag
    <div className="App">
    <Greet />
    </div>
  );
}

export default App;
