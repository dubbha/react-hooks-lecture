import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Hello = () => (<h1>Hello, World!</h1>);

console.log('this line is gonna be exactly 80 chars beware of the wolves!!!!');

const App = () => (
    <BrowserRouter>
        <Route path="/" component={Hello} />
    </BrowserRouter>
);

render(<app>, document.getElementById('root'));</app>
