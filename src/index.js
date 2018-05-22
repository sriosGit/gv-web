import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider,addLocaleData } from 'react-intl';
import es from 'react-intl/locale-data/es';
addLocaleData(es);
ReactDOM.render(
	<IntlProvider locale={'es'}>
	<BrowserRouter>
  <div>
    {routes}
  </div>
</BrowserRouter></IntlProvider>, document.getElementById('root'));
registerServiceWorker();
