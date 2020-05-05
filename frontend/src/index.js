import React from 'react';
import App from './App';

import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertMUITemplate from 'react-alert-template-mui'

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP,
    offset: '30px',
    type: types.SUCCESS,
    // you can also just use 'scale'
    transition: transitions.SCALE,
  }

  const Root = () => (
    <AlertProvider template={AlertMUITemplate} {...options}>
      <App />
    </AlertProvider>
  )
   
  render(<Root />, document.getElementById('root'))


