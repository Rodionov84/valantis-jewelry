import './App.css';
import { store } from './store';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { Wrap } from './components/Wrap';

function App() {

 
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Wrap />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
