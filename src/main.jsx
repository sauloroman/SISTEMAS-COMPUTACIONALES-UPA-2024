import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { InvitationApp } from './InvitationApp';
import './scss/app.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <InvitationApp />
    </Provider>
  </React.StrictMode>,
)
