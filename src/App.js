import {Header} from './components';
import {HomePage, CartPage} from './pages';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
       <Route exact path="/" component={HomePage}/> 
       <Route exact path="/cart" component={CartPage}/> 
      </div>
    </div>
  );
}

export default App;
