import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Calculator from './Calculator'
import Dogs from './DogSaga'

 const Main = () =>(
     <main>
         <Switch>
             <Route path='/calculator' component={Calculator} />
             <Route path='/dog' component={Dogs} />
         </Switch>
     </main>
 )

export default Main;