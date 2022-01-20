import React from 'react'
import ReactDOM from 'react-dom'
import MyRoutes from './routes'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)