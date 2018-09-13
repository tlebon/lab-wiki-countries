import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Countries from './countries'
import Products from './products'

const App =()=>{
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/products" component={} />
        <Route path="countries" component={} />
      </Switch>
      </BrowserRouter>
    );
  }


export default App;