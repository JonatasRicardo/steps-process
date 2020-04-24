import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import ModalSteps from './containers/ModalSteps';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ModalSteps />
      </div>
    </Provider>
  );
}

export default App;
