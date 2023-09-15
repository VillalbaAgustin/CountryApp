import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';
import { NavBar } from './components';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
