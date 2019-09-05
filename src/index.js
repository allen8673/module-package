// import Hello from './components/hello/hello'
import {Hello} from '../package/index'
import React from 'react'
import { render } from "react-dom";

const App = () =>{
   return( <div>
       <Hello name='Allen'/>
       </div>) 
}
render(<App />, document.getElementById("app"));
