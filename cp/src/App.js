import React from 'react';
import imginsrc from './imginsrc.jpg'
// import imginpublic from '../public/imginpublic.jpg'
// import myVideo from '..'
  
function App() {
  return (
    <div className="App">
      
    <div style={{border:'solid 1px black',maxWidth:'100'}}>  
 
        <h1 className="red"></h1>  
 
        	<br/>  
 
            <img src={imginsrc}/> <br/> 
 
             	<img src={process.env.PUBLIC_URL + '/imginpublic.jpg'}/>  
 
    </div>  
 
    <video width='320' height="240" controls>  
 
        <source src="myVideo.mp4" type="video/mp4"/> 
 
    </video> 
    </div>
  );
}

export default App;
