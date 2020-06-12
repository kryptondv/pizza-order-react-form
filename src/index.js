import React from 'react';
import ReactDom from 'react-dom';

import './index.css'
import Form from './components/Form';

const App = () => (
  <div>
    <Form />
  </div>
);


ReactDom.render(
  <App />,
  document.getElementById('root')
);