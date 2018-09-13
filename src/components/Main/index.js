import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Calculator from './Calculator'
import Dogs from './DogSaga'
import DND from './DND'
import Drag from './Drag'

 const Main = () =>(
     <main>
         <Switch>
             <Route path='/calculator' component={Calculator} />
             <Route path='/dog' component={Dogs} />
             <Route path='/dnd' component={DND} />
             <Route path='/drag' component={Drag} />
         </Switch>
     </main>
 )

export default Main;