import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './navbar/navbar'
import {Router as Router ,Route ,Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history'
const newHistory = createBrowserHistory();
import './app.css'
import NoAfterMainContent from './main content main/pathBlack';

import bear from './assets/cusrsor_origin.png'



function App() {
  useEffect(()=>{
    const body = document.querySelector('body')
      body.style.cursor = 'url(' + bear + ', auto)'
  },[])
  return (
    <Router history={newHistory}>
      {/*     router Protection      */}
    <Navbar/>
    {/*     main content switch      */}
    <div id='main'>
    <Switch>
      <Route exact path='/'>
        {/* / path */}
        <NoAfterMainContent/>
         {/* / path */}
      </Route>
      <Route exact path='/Home'>
      <NoAfterMainContent/>
      </Route>
    </Switch>
    </div>
    {/*     main content switch      */}
    {/*     router Protection        */}
    </Router>
  )
}

export default App
