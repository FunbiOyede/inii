import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';


// intercept the unwanted kurama chakra

axios.interceptors.request.use(request =>{
   
    //must returned request or else you block the operations
    return request
}, err => {
    console.log(err);
    return Promise.reject(err);
})


axios.interceptors.response.use(response =>{
   
    //must be returned request or else you block the operations
    return response
}, err  =>{
    console.log(err);
    return Promise.reject(err);
})




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
