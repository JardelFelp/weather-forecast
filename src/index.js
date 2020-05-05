import React from 'react'
import Routes from 'routes'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from 'serviceWorker'
import { Provider } from 'react-redux'
import store from 'store'
import StoreProvider from 'store/storeProvider';

ReactDOM.render(
  <Provider store={store}>
    <StoreProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StoreProvider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()