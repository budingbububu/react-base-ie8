import React, { Component } from 'react';

import { render } from 'react-dom';

class App extends Component {
    render() {
        return <div>测试是</div>;
    }
}

const DOM = document.getElementById("app");

const renderDOM = () => {
    render(<App />, DOM);
};

renderDOM();

if (module.hot) {
    module.hot.accept([], () => {
        renderDOM()
    });
}

