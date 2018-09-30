import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppRouter } from './router';

library.add(faBars, faArrowLeft)


ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
