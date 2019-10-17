import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createRoutes from "./createRoutes";

const routes = createRoutes();

ReactDOM.render(routes, document.getElementById('root'));
