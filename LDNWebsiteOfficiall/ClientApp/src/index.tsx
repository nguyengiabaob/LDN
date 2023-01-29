import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;

// Get the application-wide store instance, prepopulating with state from the server where available.
// const store = configureStore(history);

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>

            <App />
    </Provider>
           
   
    </BrowserRouter>
    ,
    document.getElementById('root'));

registerServiceWorker();
