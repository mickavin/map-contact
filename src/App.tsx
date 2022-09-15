import Main from 'screens/Main';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import createStore, { persistConfig } from 'store/configureStore';
import {PersistGate} from 'redux-persist/es/integration/react';
import crossBrowserListener from 'utils/cross-browser-middleware';
import './App.css';

function App() {
  const store = createStore();
  const persistedStore = persistStore(store);
  window.addEventListener('storage', crossBrowserListener(store, persistConfig));

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <Main/>
      </PersistGate>
  </Provider>
  );
}

export default App;
