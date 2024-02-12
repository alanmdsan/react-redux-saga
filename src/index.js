import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import myFirstReducer from './reducer'

const rootReducer = combineReducers({ myFirstReducer })
const store = configureStore({ reducer: rootReducer })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
