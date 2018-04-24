import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
  <div>
    {routes}
  </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
