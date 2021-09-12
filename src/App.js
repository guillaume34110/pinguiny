import { BrowserRouter, Switch, Route ,HashRouter} from 'react-router-dom';
import ChildCreate from './dependances/pages/ChildCreate';
import PinguiniGenerator from './dependances/pages/PinguiniGenerator';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/' exact component={PinguiniGenerator} />
          <Route path='/child' exact component={ChildCreate} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
