import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import ModalSteps from './containers/ModalSteps';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App" data-testid="app">
        <ModalSteps />
      </div>
    </Provider>
  );
}

export default App;
