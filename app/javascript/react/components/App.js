import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Indexpage from './Indexpage'
import RestroomShowContainer from './RestroomShowContainer'


const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Indexpage} />
        <Route exact path="/restrooms" component={Indexpage} />
        <Route exact path="/restrooms/:id" component={RestroomShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
