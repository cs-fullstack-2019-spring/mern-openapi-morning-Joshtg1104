import React, { Component } from 'react';

import './App.css';
import WorldWideHome from './WorldWideHome'

class App extends Component {

    render() {

        return(
           <div>
               {/*calls WorldWideHome.js on the parent component*/}
               <WorldWideHome/>
           </div>
        );
  }
}

export default App;
