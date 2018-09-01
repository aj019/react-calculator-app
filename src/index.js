import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './saga'; 
import {BrowserRouter} from 'react-router-dom';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers,applyMiddleware(sagaMiddleware));

ReactDOM.render(
    <Provider store ={store} >    
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root'));

sagaMiddleware.run(watcherSaga);    
registerServiceWorker();
