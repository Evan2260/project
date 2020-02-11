import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Indexpage from './Indexpage'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Indexpage} />
        <Route exact path="/home" component={Indexpage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
